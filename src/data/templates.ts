import { Category, Template } from '@/types';

const templates: Record<Category, Template[]> = {
  'Wholesaling': [
    {
      id: "wholesaling-1",  // přidáno
      title: "High-Converting Wholesaling Property Acquisition Script",
      preview: "To identify motivated sellers and secure wholesale real estate deals through cold calling. Duration: 8-12 minutes",
      fullScript: `
<h1>High-Converting Wholesaling Property Acquisition Script</h1>

<h3>OPENING (0-60 seconds)&nbsp;</h3>
<div><br></div>
<div>"<span style="font-weight: bold;">Hi, this is [YOUR NAME</span>] with <span style="font-weight: bold;">[COMPANY NAME].</span> I'm a local real estate investor actively looking to buy properties in <span style="font-weight: bold;">[AREA/NEIGHBORHOOD].</span> I noticed your property at <span style="font-weight: bold;">[ADDRESS</span>] and wanted to reach out directly to see if you might consider selling for the right offer?"</div>

<div>[If they seem hesitant] "I understand this call is unexpected. We're local investors who buy properties as-is for cash, and I'd love to learn more about your property if you have just a few minutes."</div>

<h2><br>&nbsp;INITIAL QUALIFICATION (1-2 minutes)&nbsp;</h2>
<div><br></div>
<div>"Would you have about 5-7 minutes to answer a few questions about the property? This will help me understand if it might be a good fit for our investment portfolio."</div>

<div>[If YES] "Excellent! Let me get some basic information first."</div>
<div>[If NO] "I completely understand. When would be a better time to have this conversation?"</div>

<h2><br>&nbsp;CONTACT INFORMATION (2-3 minutes)&nbsp;</h2>
<div><br></div>
<div>"Before we discuss the property, let me verify a few details:"</div>
<ul>
  <li>Could you confirm your full name?</li>
  <li>And I have your property address as <span style="font-weight: bold;">[ADDRESS]</span> - is that correct?</li>
  <li>What's the best phone number to reach you?</li>
  <li>Where would you like me to send additional information by email?</li>
</ul>

<h2><br>&nbsp;PROPERTY CONDITION (3-5 minutes)&nbsp;</h2>
<div><br></div>
<div>"Now, I'd like to learn more about your property:"</div>
<ul>
  <li>How long have you owned the house?</li>
  <li>Is anyone currently living in the property?</li>
  <li>What's the general condition of the house?</li>
  <li>Are there any repairs or updates needed?</li>
  <li>How many bedrooms and bathrooms does it have?</li>
  <li>What's the approximate square footage?</li>
  <li>Have you done any major renovations recently?</li>
  <li>How would you describe the condition of the roof and foundation?</li>
  <li>Are there any special features I should know about?</li>
</ul>

<h2><br>&nbsp;MOTIVATION DISCOVERY (5-7 minutes)&nbsp;</h2>
<div><br></div>
<div>"Thank you for sharing those details. May I ask what's making you consider selling at this time?"</div>

<div>[Listen carefully and show empathy]</div>

<div>"How long have you been thinking about selling?"</div>

<div>[If they mention any challenges or problems] "That sounds challenging. How has that been affecting you?"</div>

<h2><br>&nbsp;CLOSING & NEXT STEPS (9-10 minutes)&nbsp;</h2>
<div><br></div>
<div>[If Showing Strong Interest] "This sounds like it could be a great fit for our buying criteria. Here's what happens next:"</div>
<ol>
  <li>I'd like to schedule a quick 15-minute walkthrough of the property</li>
  <li>My team will analyze the information and prepare a cash offer</li>
  <li>We can present you with a no-obligation offer within 24 hours after viewing</li>
  <li>If you accept, we can close in as little as 7-14 days</li>
</ol>

<div>"When would be the best time for me to come take a look at the property?"</div>

<div>[If Needs Time] "I understand you need time to think about it. Would it be okay if I:"</div>
<ol>
  <li>Send you some information about our company by email?</li>
  <li>Follow up with you next week to answer any questions?</li>
  <li>Add you to our priority buyer list in case our offer increases?</li>
</ol>`,
      content: {  // přidáno
        sections: [
          {
            id: "wholesaling-section-1",
            type: "heading",
            content: "High-Converting Wholesaling Property Acquisition Script"
          },
          {
            id: "wholesaling-section-2",
            type: "text",
            content: "Opening and initial contact script for wholesaling prospects"
          }
        ]
      },
      category: 'Wholesaling'  // přidáno
    }
  ],
'Creative Finance': [
    {
      id: "creative-finance-1",  // přidáno
      title: "Creative Financing Property Acquisition Script",
      preview: "To present creative financing solutions and identify sellers open to flexible purchase terms. Duration: 8-12 minutes",
      fullScript: `
<h1>Creative Financing Property Acquisition Script</h1>

<h3>OPENING (0-60 seconds)&nbsp;</h3>
<div><br></div>
<div>"<span style="font-weight: bold;">Hi, this is [YOUR NAME</span>] with <span style="font-weight: bold;">[COMPANY NAME].</span> I'm a local real estate investor specializing in flexible property purchases in <span style="font-weight: bold;">[AREA/NEIGHBORHOOD].</span> I'm reaching out about your property at <span style="font-weight: bold;">[ADDRESS]</span> because we offer unique selling options that many traditional buyers don't."</div>

<div>[If they seem hesitant] "I understand this call is unexpected. What makes us different is that we can offer multiple ways to structure a sale that might be more beneficial for your situation, including options that could provide you with monthly income."</div>

<h2><br>&nbsp;INITIAL QUALIFICATION (1-2 minutes)&nbsp;</h2>
<div><br></div>
<div>"Would you have about 5-7 minutes to discuss some creative ways we could potentially purchase your property? These options often provide better tax benefits and higher overall returns than traditional sales."</div>

<div>[If YES] "Excellent! Let me get some basic information first."</div>
<div>[If NO] "I understand. When would be a better time to explore these options?"</div>

<h2><br>&nbsp;PROPERTY & FINANCIAL SITUATION (3-5 minutes)&nbsp;</h2>
<div><br></div>
<div>"To understand which options might work best for you:"</div>
<ul>
  <li>How long have you owned the property?</li>
  <li>Is there currently a mortgage on the property?</li>
  <li>What's the approximate remaining balance?</li>
  <li>Are you currently living in the property or is it rented?</li>
  <li>If rented, what's the current monthly rent?</li>
  <li>Have you had any previous experience with owner financing or lease options?</li>
</ul>

<h2><br>&nbsp;EXPLORING MOTIVATIONS (5-7 minutes)&nbsp;</h2>
<div><br></div>
<div>"What's your main goal with the property right now?"</div>
<ul>
  <li>Are you looking for immediate cash?</li>
  <li>Would you be interested in receiving monthly payments over time?</li>
  <li>How important are tax benefits to your situation?</li>
  <li>Have you considered the advantages of spreading out your capital gains?</li>
</ul>

<h2><br>&nbsp;PRESENTING OPTIONS (7-8 minutes)&nbsp;</h2>
<div><br></div>
<div>"Based on what you've shared, let me outline a few options we could explore:"</div>

<h3>1. Owner Financing:</h3>
<ul>
  <li>You become the bank and receive monthly payments</li>
  <li>Potential tax advantages through installment sale</li>
  <li>Higher overall return than traditional sale</li>
</ul>

<h3>2. Lease Option:</h3>
<ul>
  <li>Immediate cash flow while maintaining ownership</li>
  <li>Potential higher sale price</li>
  <li>Maintenance handled by tenant-buyer</li>
</ul>

<h3>3. Subject-To:</h3>
<ul>
  <li>We take over your existing mortgage payments</li>
  <li>You're relieved of payment obligations</li>
  <li>Quick closing possible</li>
</ul>

<h2><br>&nbsp;CLOSING & NEXT STEPS (9-10 minutes)&nbsp;</h2>
<div><br></div>
<div>[If Showing Interest] "This sounds promising. Here's what I suggest as next steps:"</div>
<ol>
  <li>I'll prepare a detailed proposal with multiple options</li>
  <li>We can meet in person to review the numbers</li>
  <li>You can choose the structure that works best for you</li>
  <li>We can close as soon as the paperwork is ready</li>
</ol>

<div>[If Needs Time] "I understand this is different from traditional sales and you need time to think about it. Would it be okay if I:"</div>
<ol>
  <li>Send you detailed information about each option?</li>
  <li>Follow up next week to answer any questions?</li>
  <li>Share some case studies of similar successful transactions?</li>
</ol>`,
      content: {  // přidáno
        sections: [
          {
            id: "creative-finance-section-1",
            type: "heading",
            content: "Creative Financing Property Acquisition Script"
          },
          {
            id: "creative-finance-section-2",
            type: "text",
            content: "Opening and options presentation for creative financing prospects"
          }
        ]
      },
      category: 'Creative Finance'  // přidáno
    }
  ],
'Agent Outreach': [
    {
      id: "agent-outreach-1",  // přidáno
      title: "Real Estate Agent Partnership Development Script",
      preview: "To build strategic relationships with real estate agents and establish a consistent deal flow pipeline. Duration: 8-12 minutes",
      fullScript: `
<h1>Real Estate Agent Partnership Development Script</h1>

<h3>OPENING (0-60 seconds)&nbsp;</h3>
<div><br></div>
<div>"<span style="font-weight: bold;">Hi, this is [YOUR NAME</span>] with <span style="font-weight: bold;">[COMPANY NAME].</span> I'm an active investor in <span style="font-weight: bold;">[AREA/NEIGHBORHOOD]</span>, and I noticed your strong presence in the market. I wanted to discuss how we might be able to work together to help more of your clients."</div>

<div>[If they seem busy] "I know you're busy, but I work with several agents who send us deals that aren't a good fit for the MLS, and we close quickly with cash. Would you be open to learning more?"</div>

<h2><br>&nbsp;INITIAL QUALIFICATION (1-2 minutes)&nbsp;</h2>
<div><br></div>
<div>"Do you have a few minutes to discuss how we might be able to help each other? We're currently buying <span style="font-weight: bold;">[X]</span> properties per month and always pay full commission."</div>

<div>[If YES] "Great! Let me explain how we typically work with agents."</div>
<div>[If NO] "No problem. When would be a better time to have this conversation?"</div>

<h2><br>&nbsp;CONTACT VERIFICATION (2-3 minutes)&nbsp;</h2>
<div><br></div>
<div>"Just to make sure I have your correct information:"</div>
<ul>
  <li>Could you confirm your full name and brokerage?</li>
  <li>What's the best email to send deal criteria to?</li>
  <li>What's your preferred phone number for opportunities?</li>
</ul>

<h2><br>&nbsp;AGENT EXPERIENCE DISCOVERY (3-5 minutes)&nbsp;</h2>
<div><br></div>
<div>"I'd love to learn more about your business:"</div>
<ul>
  <li>How long have you been working in this market?</li>
  <li>What types of listings do you typically handle?</li>
  <li>Have you worked with investors before?</li>
  <li>What challenges do you face with hard-to-sell properties?</li>
  <li>How do you currently handle properties that need significant repairs?</li>
</ul>

<h2><br>&nbsp;VALUE PROPOSITION (5-7 minutes)&nbsp;</h2>
<div><br></div>
<div>"Let me share how we can be a valuable resource for you:"</div>

<h3>We can help with:</h3>
<ul>
  <li>Properties needing major repairs</li>
  <li>Sellers needing quick closings</li>
  <li>Expired listings</li>
  <li>Inherited properties</li>
  <li>Pre-foreclosures</li>
  <li>Difficult-to-finance properties</li>
</ul>

<h3>Our commitment to agents:</h3>
<ul>
  <li>Full commission payment</li>
  <li>7-14 day closings</li>
  <li>As-is purchases</li>
  <li>No repair requests</li>
  <li>Cash offers</li>
  <li>No financing contingencies</li>
</ul>

<h2><br>&nbsp;PROCESS EXPLANATION (8-9 minutes)&nbsp;</h2>
<div><br></div>
<div>"Here's how we typically work with agents:"</div>
<ol>
  <li>You send us property details and photos</li>
  <li>We provide a cash offer within 24 hours</li>
  <li>We can close in as little as 7 days</li>
  <li>You receive full commission at closing</li>
  <li>We handle all repairs and updates</li>
</ol>

<div>"How does this process sound to you?"</div>

<h2><br>&nbsp;CLOSING & NEXT STEPS (9-10 minutes)&nbsp;</h2>
<div><br></div>
<div>[If Showing Interest] "Great! Let's do this:"</div>
<ol>
  <li>I'll send you our buying criteria and process overview</li>
  <li>You can add me to your list for potential deals</li>
  <li>We could meet for coffee next week to discuss specific opportunities</li>
</ol>

<div>"Would you be available <span style="font-weight: bold;">[suggest specific day/time]</span> to meet in person?"</div>

<div>[If Needs Time] "I understand you need to think about it. May I:"</div>
<ol>
  <li>Send you our complete investor package?</li>
  <li>Share some testimonials from other agents we work with?</li>
  <li>Follow up next week to answer any questions?</li>
</ol>`,
      content: {  // přidáno
        sections: [
          {
            id: "agent-outreach-section-1",
            type: "heading",
            content: "Real Estate Agent Partnership Development Script"
          },
          {
            id: "agent-outreach-section-2",
            type: "text",
            content: "Opening and partnership development script for real estate agents"
          }
        ]
      },
      category: 'Agent Outreach'  // přidáno
    }
  ],
'Foreclosure': [
    {
      id: "foreclosure-1",  // přidáno
      title: "Pre-Foreclosure Homeowner Assistance Script",
      preview: "To help homeowners in foreclosure while creating win-win investment opportunities. Duration: 8-12 minutes",
      fullScript: `
<h1>Pre-Foreclosure Homeowner Assistance Script</h1>

<h3>OPENING (0-60 seconds)&nbsp;</h3>
<div><br></div>
<div>"<span style="font-weight: bold;">Hi, this is [YOUR NAME</span>] with <span style="font-weight: bold;">[COMPANY NAME].</span> I'm reaching out because I understand you might be dealing with a challenging situation with your property at <span style="font-weight: bold;">[ADDRESS]</span>."</div>

<div>[If they seem defensive] "I know this call is unexpected, but we specialize in helping homeowners who are facing foreclosure. We may have some options that could help you avoid foreclosure and protect your credit."</div>

<h2><br>&nbsp;INITIAL RAPPORT (1-2 minutes)&nbsp;</h2>
<div><br></div>
<div>"Would you be open to having a confidential conversation about some options that might help your situation? I work with many homeowners in similar circumstances, and there are often more options available than people realize."</div>

<div>[If YES] "Thank you for being open to talking. Let me learn more about your situation."</div>
<div>[If NO] "I understand your hesitation. Would it be better to talk another time?"</div>

<h2><br>&nbsp;CONTACT VERIFICATION (2-3 minutes)&nbsp;</h2>
<div><br></div>
<div>"Before we discuss your situation, let me confirm a few details:"</div>
<ul>
  <li>Am I speaking with <span style="font-weight: bold;">[OWNER NAME]</span>?</li>
  <li>Is <span style="font-weight: bold;">[ADDRESS]</span> the property in question?</li>
  <li>What's the best number to reach you?</li>
  <li>Where can I send you some information about your options?</li>
</ul>

<h2><br>&nbsp;SITUATION ASSESSMENT (3-5 minutes)&nbsp;</h2>
<div><br></div>
<div>"To understand how best to help, could you tell me:"</div>
<ul>
  <li>Where are you in the foreclosure process?</li>
  <li>Have you received any notices from the bank?</li>
  <li>How many payments are currently behind?</li>
  <li>Have you been able to communicate with your lender?</li>
  <li>What attempts have you made to resolve the situation?</li>
  <li>Are you currently living in the property?</li>
</ul>

<h2><br>&nbsp;PRESENTING SOLUTIONS (7-8 minutes)&nbsp;</h2>
<div><br></div>
<div>"Based on what you've shared, let me outline some possible options:"</div>

<h3>1. Quick Sale Solution:</h3>
<ul>
  <li>We can close quickly before foreclosure</li>
  <li>You walk away with dignity and possibly cash</li>
  <li>Foreclosure process stops immediately</li>
</ul>

<h3>2. Short Sale Assistance:</h3>
<ul>
  <li>We can negotiate with your lender</li>
  <li>Potentially eliminate remaining debt</li>
  <li>Minimize credit impact</li>
</ul>

<h3>3. Lease-Back Program:</h3>
<ul>
  <li>Sell to us but continue living there</li>
  <li>Rent payments often lower than mortgage</li>
  <li>Time to rebuild your financial situation</li>
</ul>

<h2><br>&nbsp;EMERGENCY RESPONSE (If Needed)&nbsp;</h2>
<div><br></div>
<div>[If they indicate immediate urgency] "Given your timeline, we should meet today if possible. I can be there at <span style="font-weight: bold;">[suggest time]</span> to review your documentation and discuss immediate solutions. Would that work for you?"</div>`,
      content: {  // přidáno
        sections: [
          {
            id: "foreclosure-section-1",
            type: "heading",
            content: "Pre-Foreclosure Homeowner Assistance Script"
          },
          {
            id: "foreclosure-section-2",
            type: "text",
            content: "Opening and assistance options for homeowners facing foreclosure"
          }
        ]
      },
      category: 'Foreclosure'  // přidáno
    }
  ]
};

export default templates;
