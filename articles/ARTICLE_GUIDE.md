# Article Writing Guide
## For the Content Creator Claude Project

Every article on this site follows a Problem → Analytics Solution structure.
This file is the template and checklist for any new article you write.

---

## Data.json Entry Format

Add a new object to the `articles` array in `articles/data.json`:

```json
{
  "id": "short-unique-slug",
  "title": "Article Title — Punchy and Specific",
  "date": "YYYY-MM-DD",
  "category": "One of: AI & Risk Analytics | Credit Risk | Fraud Detection | Team Building | EU Regulatory",
  "tags": ["Tag1", "Tag2", "Tag3", "Tag4"],
  "summary": "One-sentence teaser shown on the article card. Make it specific — name the problem and the outcome.",
  "readTime": "X min read",
  "image": "https://images.unsplash.com/photo-XXXXXXXXXXX?w=800&q=80",
  "content": [
    "Opening paragraph — hook with the real-world situation or failure mode.",
    "## 1. The Problem",
    "Describe the specific, named problem. What breaks? Who feels it? Why does it persist?",
    "## 2. The Analytics Angle",
    "How does data science change the frame? What signal exists that the business isn't using?",
    "## 3. What Was Built",
    "Specific: tools, team size, timeline, data sources. Not 'we built an ML model' — name the model type, the features, the output.",
    "## 4. Measured Impact",
    "Before/after numbers. Use the format: '+X% [metric]' or '−X% [metric]' or '$XM [result]'.",
    "## 5. What European Banks Can Take From This",
    "The EU context: which regulation applies (GDPR, PSD2, EU AI Act, DORA, Basel IV)? What's different? What's directly transferable?",
    "Closing line with a soft CTA: 'If your institution is working on this problem, reach me at aceakant@gmail.com or on LinkedIn.'"
  ]
}
```

---

## Publishing Checklist

Before pushing a new article to `articles/data.json`:

- [ ] `id` is lowercase, hyphenated, unique across all articles
- [ ] `date` is in YYYY-MM-DD format (newest articles appear first)
- [ ] `category` is one of the five categories above (for filter chips to work)
- [ ] `summary` is one complete sentence, under 180 characters
- [ ] `image` is a valid Unsplash URL with `?w=800&q=80` for fast loading
- [ ] `content` array has at least 4–6 paragraphs plus the 5 headings above
- [ ] Every number in the article has a source (from Ajay's CV, or named institution)
- [ ] EU angle explicitly names a regulation or framework
- [ ] Article ends with a contact/reach-out line

---

## Publishing Step

After editing `articles/data.json`, push the file to the `main` branch of `aceakant/Profile`.
GitHub Pages redeploys automatically within ~60 seconds. No other action needed.

The tool call to use (GitHub MCP):
```
mcp__github__create_or_update_file(
  owner="aceakant",
  repo="Profile",
  path="articles/data.json",
  message="Add article: <title>",
  content=<base64 of updated data.json>,
  branch="main"
)
```

---

## Style Notes

- **Voice**: First person, practitioner, direct. "I built…" not "An ML system was built…"
- **Audience**: Risk analytics leaders and hiring managers at European banks and fintechs
- **Avoid**: Generic AI hype, vague percentages without context, excessive jargon
- **Length**: 600–900 words per article (6–9 content array items)
- **EU angle**: Every article must have one — either a regulation connection or a market opportunity observation
