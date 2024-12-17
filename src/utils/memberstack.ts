export async function getMemberData() {
  try {
    // Try getting ID from URL parameters
    const params = new URLSearchParams(window.location.search);
    let memberstackId = params.get('memberId');
    
    // If not in URL, try getting from parent frame
    if (!memberstackId && window.parent !== window) {
      try {
        memberstackId = new URLSearchParams(window.parent.location.search).get('memberId');
      } catch (e) {
        console.warn('Could not access parent frame params:', e);
      }
    }
    
    // If still no ID, check for data attribute
    if (!memberstackId) {
      const iframe = window.frameElement as HTMLIFrameElement;
      memberstackId = iframe?.getAttribute('data-member-id') || null;
    }

    console.log('Member ID Resolution:', {
      memberstackId,
      fullUrl: window.location.href,
      isIframe: window !== window.parent
    });

    if (!memberstackId) {
      throw new Error('Missing member ID in URL or iframe attributes');
    }

    return {
      memberstackId
    };
  } catch (error) {
    console.error('Error getting member data:', error);
    throw error;
  }
}
