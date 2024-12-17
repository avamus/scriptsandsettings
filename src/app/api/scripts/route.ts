import { createClient } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import cors from '@/lib/cors';

const getDbClient = async () => {
  const client = createClient();
  await client.connect();
  return client;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const memberstackId = searchParams.get('memberstackId');
  const category = searchParams.get('category');
  
  try {
    const client = await getDbClient();
    let query = 'SELECT * FROM scripts_of_users WHERE 1=1';
    const params: any[] = [];

    if (memberstackId) {
      query += ' AND memberstack_id = $' + (params.length + 1);
      params.push(memberstackId);
    }

    if (category) {
      query += ' AND category = $' + (params.length + 1);
      params.push(category);
    }

    query += ' ORDER BY updated_at DESC';

    const { rows } = await client.query(query, params);
    await client.end();

    return NextResponse.json(rows.map(row => ({
      id: row.id,
      name: row.name,
      content: row.content,
      lastEdited: row.last_edited,
      isSelected: row.is_selected,
      category: row.category
    })));
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Failed to load scripts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { memberstackId, name, content, category } = body;
    
    if (!memberstackId || !content || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const client = await getDbClient();
    const { rows } = await client.query(
      `INSERT INTO scripts_of_users 
       (memberstack_id, name, content, category, last_edited)
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
       RETURNING *`,
      [memberstackId, name || 'Untitled Script', content, category]
    );
    
    await client.end();
    return NextResponse.json({
      id: rows[0].id,
      name: rows[0].name,
      content: rows[0].content,
      lastEdited: rows[0].last_edited,
      isSelected: rows[0].is_selected,
      category: rows[0].category
    });
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Failed to save script' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, memberstackId, name, content, isSelected, category } = body;

    if (!id) {
      return NextResponse.json({ error: 'Script ID required' }, { status: 400 });
    }

    const updateFields = [];
    const values = [id];
    let paramCount = 2;

    const fieldsToUpdate: Record<string, any> = {};
    if (name !== undefined) fieldsToUpdate.name = name;
    if (content !== undefined) fieldsToUpdate.content = content;
    if (isSelected !== undefined) fieldsToUpdate.is_selected = isSelected;
    if (memberstackId !== undefined) fieldsToUpdate.memberstack_id = memberstackId;
    if (category !== undefined) fieldsToUpdate.category = category;

    for (const [key, value] of Object.entries(fieldsToUpdate)) {
      updateFields.push(`${key} = $${paramCount}`);
      values.push(value);
      paramCount++;
    }

    if (updateFields.length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    const query = `
      UPDATE scripts_of_users 
      SET ${updateFields.join(', ')}, last_edited = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
    `;

    const client = await getDbClient();
    const { rows } = await client.query(query, values);
    await client.end();

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Script not found' }, { status: 404 });
    }

    return NextResponse.json({
      id: rows[0].id,
      name: rows[0].name,
      content: rows[0].content,
      lastEdited: rows[0].last_edited,
      isSelected: rows[0].is_selected,
      category: rows[0].category
    });
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Failed to update script' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'Script ID required' }, { status: 400 });
  }

  try {
    const client = await getDbClient();
    const { rows } = await client.query(
      'DELETE FROM scripts_of_users WHERE id = $1 RETURNING id',
      [id]
    );
    await client.end();

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Script not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Failed to delete script' }, { status: 500 });
  }
}
