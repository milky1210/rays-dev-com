# RAYS character and site assets

User-provided references are retained in `references/rays-expressions.jpg` and `references/rays-turnaround.jpg`.

## Identity

- Oversized rounded triangular charcoal hood, #2B2B2B.
- Featureless navy face, #0B1020.
- Two circular ring eyes and outlined downward triangular mouth, warm yellow #FFE680.
- Black drawstring hoodie, large sleeves, short trousers and small black shoes.
- Rounded chibi proportions, about 2–3 heads tall.
- Expressions change eye shape and pose while preserving the hood and mouth.

## Published assets

- `public/assets/rays-welcome.png`: welcoming full-body pose for the portfolio hero.
- `public/assets/rays-thinking.png`: learning hero, learning feature and retry feedback.
- `public/assets/rays-celebrate.png`: correct answers, completed sessions and About.
- `public/assets/rays-avatar-v2.png`: reference-faithful illustrated head icon (256px), shared by headers, hints and footers.
- `public/favicon-rays-v2.png`: 64px favicon; `public/apple-touch-icon-rays-v2.png`: 180px touch icon. Previous SVG is retained for history but is no longer linked.
- `public/og-rays.png`: social sharing card.

PNG artwork was created using the built-in ImageGen tool on 2026-11-08. The three character PNGs preserve real alpha transparency; the social card has an opaque ivory background. Existing artwork remains available under its original filenames.

## Final generation prompts

### Front-facing avatar, updated 2026-11-10

The built-in ImageGen tool created `docs/brand/rays-avatar-v2-master.png` using the supplied expression and turnaround references. Published icon sizes are downscaled copies with alpha preserved.

Use case: identity-preserve. Asset type: website mascot avatar icon, square, transparent. The TWO supplied images are CHARACTER IDENTITY references; reproduce the NORMAL front-facing RAYS face, especially the large face close-up in the lower left of reference image 2 and normal expression top left of reference image 1. Draw exactly one head-and-hood icon, no body, no shoulders, no text, no labels, no border badge, no background. Match the character faithfully: a broad rounded triangular charcoal hoodie hood, gently asymmetrical peak leaning slightly right, wide flared rounded lower corners, subtle layered fabric edge and soft charcoal cel shading, NOT an egg-shaped or pointed teardrop face. Inside is a very dark navy featureless face; two LARGE hollow warm-yellow glowing perfectly ROUND ring eyes (each about 1/5 the face width), placed level with one another, and a clearly visible small downward-pointing equilateral triangular outlined beak mouth centered just beneath the eyes. No nose, no eyebrows, no cheeks. Preserve relative sizes and spacing of eyes, mouth and hood from the provided front-facing face close-up. The dark face forms a broad rounded triangle opening within the hood, not a narrow mask. Confident 2D hand-drawn cel illustration, restrained warm glow, no 3D. Head fills 90% of the square canvas, all hood edges fully visible, transparent alpha background. Optimize legibility at 32–48px without changing character design.


### Common character prompt

Use case: illustration-story. Create a polished website character asset, using BOTH supplied images only as CHARACTER IDENTITY REFERENCE SHEETS. Draw exactly ONE RAYS character, no sheet, no text, no letters, no frame, no props, no background, no ground shadow. Preserve this exact character identity: oversized rounded triangular charcoal hood (#2B2B2B), dark navy featureless face (#0B1020), two warm yellow (#FFE680) glowing circular ring eyes and small outlined downward-pointing triangular beak mouth; simple black hoodie with drawstrings and pouch, short black trousers and little black shoes, oversize sleeves, 2.5-head-tall chibi proportions. Soft hand-drawn cel shading and confident charcoal outlines, restrained warm face glow, charming and a little mysterious. Flat 2D illustration faithful to references, not 3D. Entire silhouette cleanly isolated with actual alpha transparency, generous 8% breathing room, centered single full body, square canvas.

Append the relevant pose to the common prompt:

- Welcome: Pose: welcoming the visitor with one mitten hand open, extended toward the LEFT side of the image where page text will be; other hand relaxed by body. Face mostly toward viewer with slight head tilt and friendly round ring eyes. Keep both feet visible.
- Thinking: Pose: thoughtful, one mitten hand at chin, other arm loosely folded, slight head tilt, circular ring eyes looking slightly upward toward viewer's left. No question mark. Full body with both feet visible.
- Celebrate: Pose: small joyful fist raised, other hand near chest, excited but gentle; smiling closed crescent eyes in warm yellow and SAME outlined downward triangular mouth. Full body with both feet visible.

### Social sharing card

Use case: logo-brand. Asset type: landscape Open Graph social sharing banner for the RAYS creative coding and mathematics portfolio. Create a refined very wide horizontal composition, approximately 1.91:1 aspect ratio. Input image 1 is a character identity and pose reference (the welcoming RAYS mascot); image 2 is the original character identity and color palette reference. On the RIGHT 40%, show exactly one large full-body RAYS in the same welcoming pose, facing viewer, hand open to the left. Preserve charcoal rounded triangular hood, navy featureless face, two warm yellow glowing circular ring eyes, outlined downward triangular mouth, simple black hoodie with drawstrings, short black trousers and shoes, 2.5-head-tall chibi anatomy, subtle cel shading. On the LEFT 55%, clean strong sophisticated dark navy sans-serif typographic wordmark with exact text 'RAYS' very large, and below it exact small monospaced text 'PLAY. BUILD. SHARE.'. Add a fine short golden line below the wordmark. Warm ivory background #FAF8F2 with a very faint warm sand circle behind the character, generous whitespace, premium approachable Japanese indie creator brand. No extra text, no labels, no watermark, no UI screenshot, no extra subjects. Whole image opaque background.
