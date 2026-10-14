// ПРОМПТЫ УРОКА 5. Каждая карточка на сайте берётся отсюда.
// Поменять текст: правь текст между обратными кавычками в prompt.
// Картинки лежат в img/cards/ и перечислены в images.
// После правки: git add . && git commit -m "обновил промпты" && git push

window.PROMPTS = [
  {
    id: 1,
    cat: "Сторителлинг",
    title: "Раскадровка на основе вашей идеи",
    attach: "",
    prompt: `CREATE A CINEMATIC STORYBOARD WITH SHORT CAPTIONS FOR EVERY FRAME.

## SETTINGS

Length of the future video: [8–15 seconds]
Number of keyframes: [9]
Format of the future video and of the visual part of each frame: [16:9 / 9:16 / 1:1]

Script:
[PASTE YOUR SCRIPT, IDEA OR SHORT ACTION HERE]

## REFERENCES

Determine the role of each attached image yourself from its content: character, clothing, object, product, location or visual style.

Preserve the appearance, silhouette, clothing, accessories and recognizability of every reference character. Preserve the shape, color, material and important details of objects and products. Use a location reference for space, light, time of day and atmosphere. Use a style reference only for palette, grading, light and mood, not for its plot.

If there is no reference, create a fitting design yourself and do not change it between frames. Do not mix the appearance of different characters and do not change who performs the action.

## STORY AND CAMERA

Create exactly as many consecutive key moments as set in the settings above. Each frame is one meaningful action, change, reaction, detail or result. The frames must read as one story, not as a set of similar poses.

For nine frames use this dramatic structure: situation → hero or object → impulse → start of the action → development → detail or reaction → change → climax → final image. If the story is simple, do not add events just to fill the grid.

Choose shot sizes and angles with purpose: wide, medium, close-up, macro detail, POV, over-the-shoulder, low or high angle. Do not add new characters, animals, objects, logos, speech bubbles or text that are not in the script.

## SHEET STRUCTURE AND CAPTIONS

Create one clean storyboard sheet. Automatically choose a clear grid: 4 frames — 2×2; 6 — 3×2; 9 — 3×3; 12 — 4×3; for any other number of frames choose a compact grid close to a square.

Each cell consists of two parts:
1. on top — the visual frame in the format set in the settings above;
2. directly below it — a narrow light or dark bar with one short caption in Russian.

The caption must explain what happens in the scene: 4 to 10 words, a simple verb and a concrete action. Start every caption with the frame number in the format "1.", "2.", "3." and so on. Example of the structure: "1. Героиня замечает свет у воды". This is only an example of the form — write captions strictly for this script.

The caption text must be sharp, large and fully legible in Russian. Do not add any other text to the sheet: no general titles, explanations, logos, watermarks or text inside the visual frames themselves.

All cells must be the same size, read left to right and top to bottom, with even, neat gutters. Fit the overall format of the storyboard sheet to the grid, the visual format of the frames and the caption bars — without cropping any cells.`,
    images: [
      {"src": "img/cards/__2026-07-24__230338.webp", "caption": "Пример"},
    ],
  },
  {
    id: 2,
    cat: "Сторителлинг",
    title: "Раскадровка продолжение истории",
    attach: "",
    prompt: `Based on the attached image, come up with a strong, clear, original and visual story for a short AI video, then create its cinematic storyboard.

Do not ask clarifying questions. First determine from the image what is the main thing in it: a character, a location, an object, a product or a visual style. Use it as the basis of the story.

Come up with an original plot about 15 seconds long. It must be understandable without dialogue or on-screen text, have an emotional hook, one main action, a small unexpected change and an expressive final image. The story must follow naturally from what is visible in the reference, not be added at random.

If the reference shows a character, preserve their face, age, build, hairstyle, clothing, accessories, silhouette and mood. If it is an object or a product, preserve its shape, color, material and important details. If it is a location, preserve the space, time of day, light, palette, materials and atmosphere. Do not add new main characters unless the plot needs them.

First, as separate text, write:
1. Logline — one sentence.
2. Short plot — 2–3 sentences.
3. Why this story suits exactly this reference — one sentence.

Then create one clean storyboard sheet of 9 consecutive frames in a 3×3 grid. Each cell consists of a visual frame and a short caption directly below it. The visual part of each frame is horizontal 16:9. The whole story must read left to right and top to bottom.

Build the sequence through: the initial situation → a detail or impulse → the hero's decision → the start of the action → development → a reaction or important detail → an unexpected change → the climax → the final image. Do not use this scheme mechanically: every frame must really be needed by the story and differ in action, composition, shot size or the state of the scene.

Choose shot sizes and camera movement like a director, but only if they strengthen the meaning: wide, medium, close-up, macro detail, POV, low or high angle. Do not add pointless transitions, effects or match cuts. Do not repeat the same frame.

Under each visual frame place a separate neat bar with a short, fully legible caption in Russian: 4 to 10 words, a concrete action, starting with the frame number — "1.", "2.", "3." and so on. For example: "1. Человек идет по лесу". This is only an example of the form — write the captions strictly according to the story you invented.

Do not add any other text to the storyboard sheet: no general title, no titles inside the visual frames, no speech bubbles, logos or watermarks. Keep a single photorealistic or stylistic language determined from the reference.

After the image, in a separate text message, give a numbered list of the 9 frames. For each, state: the action, the shot/angle and a short camera move — one line per frame.`,
    images: [
      {"src": "img/cards/__2026-07-24__230351.webp", "caption": "Пример"},
    ],
  },
  {
    id: 3,
    cat: "Карусели",
    title: "Промпт для карусели",
    attach: "",
    prompt: `Creating a carousel:
You are a creative director, carousel designer and specialist in preparing prompts for GPT Image.

Your task is to develop, based on the data provided, a creative and production concept for a carousel that can then be generated step by step in GPT Image.

The carousel must be generated almost ready to publish:

- with headlines and body text;
- with a logo or brand name;
- with a permanent signature or account;
- with slide numbers;
- with a progress indicator;
- with decorative and UI elements;
- with a consistent design across all cards.

Do not generate images right now. Prepare the concept and ready-made prompts for generating them.

<project_data>
Brand name:

Company description:

Positioning:

Brand tone:

Target audience:

Publishing platform:

Number of cards:

Aspect ratio:

Carousel topic:

Goal:
Give a short summary of the post

Source data and facts:

Permanent signature or account:
@artem.pataga

Logo:

Desired visual style:

Mandatory elements:

Forbidden elements:

</project_data>

Develop the result in the following structure.

1. CREATIVE CONCEPT

Describe:
- the main idea;
- the visual metaphor;
- the emotional effect;
- the narrative logic;
- how attention is held between cards.

2. FIXED DESIGN SYSTEM

Define the rules that are identical for the whole carousel:

- aspect ratio;
- color palette;
- background and textures;
- typographic style;
- text sizes and hierarchy;
- placement of headlines and body text;
- line-break rules;
- logo placement;
- placement of the permanent signature;
- card number style;
- progress indicator style;
- recurring decorative and UI elements;
- grid, margins and alignment;
- style of images and illustrations;
- forbidden changes.

The logo, brand name, signature and account must be reproduced exactly according to the provided references.

3. CAROUSEL SCRIPT

For each card specify:

- the role of the card;
- the exact headline;
- the exact supporting text;
- the text of the permanent signature;
- the card number;
- the state of the progress indicator;
- the main visual scene;
- the placement of all elements;
- the connection with neighboring cards.

Do not overload cards with text. If necessary, edit the text while keeping the original meaning.

4. CHOOSING THE REFERENCE CARD

Choose the card that best demonstrates the whole design system.

It does not have to be the first card. The reference must clearly show:

- typography;
- the main colors;
- the visual style;
- the logo and signature;
- the progress indicator;
- recurring elements.

5. READY PROMPTS FOR GPT IMAGE

Prepare:

- a separate prompt for the reference card;
- a separate prompt for each of the remaining cards.

Each prompt must contain:

- the exact aspect ratio from the concept;
- the exact card text in quotation marks;
- the exact placement of the text;
- a description of the visual scene;
- the placement of the logo and signature;
- the card number;
- the state of the progress indicator;
- recurring UI elements;
- the rules of the fixed design system;
- a list of elements that must not be changed.

Do not use generic instructions like "make it beautiful".
All instructions must be concrete and suitable for direct generation.

Finally, prepare a BATCH GENERATION PROMPT for the third stage.

This prompt must make it possible to generate all cards except the reference one in a single request.

For each card specify a separate production task:

- a unique identifier: CARD_01, CARD_02 and so on;
- the exact text;
- the visual scene;
- the composition;
- the card number;
- the state of the progress indicator;
- elements that differ from the reference;
- elements that must fully match the reference.

The BATCH GENERATION PROMPT must explicitly require:

- to create each card as a separate standalone image;
- to return a separate file for each card;
- not to combine the cards into a collage, grid or single image;
- to create all images within one task;
- to use the approved reference card as a strict visual reference;
- to follow the format and aspect ratio from the concept;
- to reproduce all the specified text exactly;
- not to add any extraneous text;
- not to skip any cards;
- to assign each result its corresponding identifier.`,
    images: [
      {"src": "img/cards/ChatGPT_Image_19__20.png", "caption": "Пример"},
    ],
  },
  {
    id: 4,
    cat: "Карусели",
    title: "Промпт для бесшовной карусели",
    attach: "",
    prompt: `Seamless carousel:
You are a creative director, Instagram carousel designer and specialist in preparing prompts for GPT Image.

Your task is to develop, based on the data provided, a creative and production concept for a SEAMLESS CAROUSEL that can then be generated step by step in GPT Image in the format of wide spreads.

IMPORTANT:
The carousel must not be designed as a set of completely independent cards.
Instead, it must be designed as a series of SEAMLESS SPREADS, where one image covers two neighboring cards at once.

Each spread will then be cut into two halves manually or separately.
So your task is to design these images so that:
- each half remains a complete standalone card after the cut;
- at the same time both halves visually feel like parts of one shared scene;
- between neighboring cards there is a seamless transition of background, objects, light, textures, composition or a common visual motif.

Do not generate images right now.
Prepare the concept and ready-made prompts for generating them.

<project_data>
Carousel topic:

Goal:

Target audience:

Publishing platform:

Number of cards:

Aspect ratio of one card:

Format of one spread:

Source data and facts:

Brand name:

Permanent signature or account:

Logo:

Additional references:

Desired visual style:

Mandatory elements:

Forbidden elements:

</project_data>

If part of project_data is not filled in, carefully complete it yourself based on the topic and task.

WORKING PRINCIPLE:
- one card = one final carousel slide;
- one spread = one wide image covering two cards at once;
- if one card is 4:5, one spread must be 8:5;
- for example, if a card is 1080×1350 px, the spread is designed as 2160×1350 px;
- the central vertical axis of the spread is the line of the future cut;
- background, light, large shapes, silhouettes, textures, smoke, decorative strokes, abstract elements and large objects may cross this line if it does not interfere with the cut;
- the following must NOT cross this line: key words, small text, the logo, the card number, the progress bar, a close-up face, important interface elements, critically important parts of the composition;
- each half of the spread must have its own internal compositional completeness;
- the logo, signature, card number and progress indicator must belong to a specific card, not to the whole spread;
- the visual system of the entire carousel must be unified and consistent.

If the number of cards is odd, propose the best solution:
- either make the last slide a separate standalone card;
- or make an asymmetric final spread;
- or make a closing spread where one half is a complete final slide and the other is a decorative ending.

Develop the result in the following structure.

1. CREATIVE CONCEPT

Describe:
- the main idea of the whole seamless carousel;
- the visual metaphor;
- the emotional effect;
- the narrative logic;
- how the transition between cards works;
- what holds attention while swiping;
- how exactly seamlessness between neighboring cards is used.

2. FIXED DESIGN SYSTEM

Define unified rules for the whole carousel:

- aspect ratio of one card;
- format of one spread;
- color palette;
- background and textures;
- typographic style;
- text sizes and hierarchy;
- placement of headlines and body text;
- line-break rules;
- logo placement;
- placement of the permanent signature;
- card number style;
- progress indicator style;
- recurring decorative and UI elements;
- grid, margins and alignment;
- safe zones;
- rules for placing content relative to the cut line;
- style of images and illustrations;
- forbidden changes.

Be sure to fix separately:
- that each card inside a spread has its own safe zone;
- that around the central cut line there must be a special "cut zone" where small text and critically important elements must not be placed;
- that the logo, signature, number and progress indicator must stay in the same places on all cards;
- that both halves of each spread must look like a single composition, yet remain readable and complete after the cut.

The logo, brand name, signature and account must be reproduced exactly according to the provided references.

3. SPREAD ARCHITECTURE

Break the whole carousel down not only into individual cards but also into pairs of cards.

For each spread specify:
- an identifier: SPREAD_01, SPREAD_02 and so on;
- which cards it includes: for example, CARD_01 + CARD_02;
- the role of the spread in the overall structure;
- what shared seamless visual unites both cards;
- what must be in the left half;
- what must be in the right half;
- which element crosses the cut line or visually connects both halves;
- which elements must never be placed on the cut line.

4. CAROUSEL SCRIPT

For each card specify:
- an identifier: CARD_01, CARD_02 and so on;
- which spread it belongs to;
- the role of the card;
- the exact headline;
- the exact supporting text;
- the text of the permanent signature;
- the card number;
- the state of the progress indicator;
- the main visual scene;
- the placement of all elements;
- how the card is connected with the neighboring card inside the spread;
- how the card works on its own after the cut.

Do not overload cards with text.
If necessary, carefully edit the text while keeping the original meaning.

5. CHOOSING THE REFERENCE SPREAD

Choose one spread that best demonstrates the whole design system.

It must be a SPREAD, not a single card.

Explain why it was chosen as the reference.
The reference spread must clearly show:
- typography;
- the main colors;
- the visual style;
- the seamless transition between two cards;
- the placement of the logo and signature;
- the style of card numbers;
- the progress indicator;
- recurring elements;
- the rules of the safe zone and the cut zone.

6. READY PROMPTS FOR GPT IMAGE

Prepare:
- a separate prompt for the reference spread;
- a separate prompt for each remaining spread.

Each prompt must be suitable for direct generation in GPT Image.

Each prompt must contain:
- the exact aspect ratio of the spread;
- an indication that this is one wide image for two cards;
- the spread identifier;
- the identifiers of both cards inside the spread;
- the exact text of the left card;
- the exact text of the right card;
- the exact text placement on the left card;
- the exact text placement on the right card;
- a description of the shared seamless visual;
- a description of the left half;
- a description of the right half;
- a description of how the visual crosses the center;
- a clear ban on placing important elements on the cut line;
- the placement of the logo and signature on each card;
- the number of each card;
- the state of the progress indicator on each card;
- recurring UI elements;
- the rules of the fixed design system;
- a list of elements that must not be changed.

Inside each prompt be sure to state:
- that after generation the image will be cut in half;
- that each half must be a complete standalone card;
- that both halves must look like parts of a single composition;
- that small text must not be placed near the central cut line;
- that key elements must not fall into the cut zone.

Do not use generic phrases like "make it beautiful".
All instructions must be concrete, production-ready and suitable for direct generation.

7. BATCH GENERATION PROMPT

Finally, prepare a single BATCH GENERATION PROMPT for generating all spreads except the reference one.

This prompt must make it possible to generate all remaining spreads in one request.

For each spread specify a separate production task:
- a unique identifier: SPREAD_01, SPREAD_02 and so on;
- which cards it includes;
- the exact text of the left card;
- the exact text of the right card;
- the overall visual motif of the spread;
- the composition of the left half;
- the composition of the right half;
- the number of the left card;
- the number of the right card;
- the state of the progress indicator for the left card;
- the state of the progress indicator for the right card;
- elements that differ from the reference spread;
- elements that must fully match the reference spread.

The BATCH GENERATION PROMPT must EXPLICITLY require:
- to create each spread as a separate standalone wide image;
- to return a separate file for each spread;
- not to combine spreads into a collage, grid or one common image;
- to create all spreads within one task;
- to use the approved reference spread as a strict visual reference;
- to follow the format and aspect ratio from the concept;
- to reproduce all the specified text exactly;
- not to add any extraneous text;
- not to skip any spreads;
- to assign each result its corresponding identifier;
- to take into account that each spread will later be cut into two cards;
- to make a seamless shared visual between the two halves of each spread;
- not to place important text or critical details on the central cut line.

RESPONSE FORMAT:
First give a short summary of the overall idea.
Then output all sections strictly in order.
Format the prompts for GPT Image in separate code blocks.
Format the BATCH GENERATION PROMPT in a separate code block as well.`,
    images: [
      {"src": "img/cards/ChatGPT_Image_19__20.png", "caption": "Пример"},
    ],
  },
  {
    id: 5,
    cat: "Fashion",
    title: "Vogue Editorial: Tokyo Neon",
    attach: "",
    prompt: `Vogue editorial fashion photography. A stunning high-fashion model wearing an oversized, avant-garde transparent vinyl puffer jacket filled with glowing neon pink gas. She is posing on a rainy neon-lit Tokyo street at night. Cinematic dramatic lighting, wet reflections, ultra-detailed skin texture, shot on 35mm lens, f/1.4, photorealistic, 8k.`,
    images: [
      {"src": "img/cards/slide-04-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 6,
    cat: "Fashion",
    title: "Avant-Garde Medieval Fashion",
    attach: "",
    prompt: `A high-fashion editorial photo of a fierce female model kneeling in a dynamic, confident pose. She is wearing avant-garde medieval fashion: a sleek dark steel corset, delicate chainmail accents, and rich dark velvet fabric. The background is a vibrant purple studio with a massive glowing neon pink circle perfectly framing her silhouette from behind. Cinematic neon backlighting, sharp focus, photorealistic, 8k.`,
    images: [
      {"src": "img/cards/slide-05-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 7,
    cat: "Иллюстрация",
    title: "Следование детализированному prompt-у",
    attach: "",
    prompt: `Illustration, a large-scale panoramic scene of a night city market in a futuristic style with many characters and details. In the center, a young female courier in a bright yellow jacket with reflective stripes, dark cargo pants, sneakers with lights, and a translucent backpack on her back with the inscription "Херандекс". Next to her, an elderly tea seller in a long robe and a hat pours the drink from a metal kettle into glass cups. On the left, street musicians: a guy in a leather jacket with a patch in a Slavic-style font reading "СЕВЕР", a girl in a long coat with a synthesizer, a drummer in a T-shirt; at their feet an open case with coins and a sticker "СПАСИБО". On the right, a fruit stall: a saleswoman in an apron arranges glowing fruit in wooden crates, the stall says "Светофрукты". In the crowd, people of different ages and styles: a student with a backpack and headphones, a woman in a strict suit with a paper bag "ПЕКАРНЯ", a teenager taking photos with an old camera, a security guard at the entrance. Objects scattered around the scene: a bicycle, boxes, newspapers, a street lamp, a small service robot. On the wall in the background hangs a poster "Нейро-Цой: КОНЦЕРТ СЕГОДНЯ". Location: a narrow city street between tall buildings, wet asphalt reflecting the light. Lighting and atmosphere: night neon, warm lamp light, light fog, cinematic mood. Other: high detail, wide angle, panoramic composition, realistic textures, film-still effect.`,
    images: [
      {"src": "img/cards/slide-07-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 8,
    cat: "Фото",
    title: "Сохранение лица в новом образе",
    attach: "",
    prompt: `Young woman, preserve facial features, proportions, and expression similar to reference. Gothic aesthetic, short dark hair with soft texture, pale skin, dark expressive eyes, black lipstick, subtle dramatic makeup. Wearing an elegant black outfit: structured jacket, lace blouse, thin black tie, minimal metallic accessories. She is turned slightly sideways, body angled, head tilted down a bit while looking up directly into the camera, one hand raised to adjust the collar or tie, the other relaxed out of frame. Pose confident and controlled but less static. Close-up portrait, chest-up framing, centered but slightly off-balance composition, neutral soft gray background, no distractions. Soft diffused studio lighting, gentle shadows shaping the face, subtle highlights on hair and fabric, matte textures, no glossy skin. Realistic fashion portrait photography, dark editorial, gothic minimalism, clean composition, high detail, natural skin texture, cinematic softness.`,
    images: [
      {"src": "img/cards/slide-08-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 9,
    cat: "Фото",
    title: "Перенос эмоции и мимики",
    attach: "",
    prompt: `Make a photo of this man from the first photo with the emotion and facial expression exactly as in the second photo. Keep the clothing as in the first photo. Size 2:3.`,
    images: [
      {"src": "img/author.webp", "caption": "Исходное фото"},
      {"src": "img/a1.webp", "caption": "Результат: эмоция и мимика"},
    ],
  },
  {
    id: 10,
    cat: "Фото",
    title: "Замена внешности",
    attach: "",
    prompt: `Generate an image in which a man with the appearance from photo 2 is in a pose as close as possible to the pose of the person in photo 1, in similar clothing and a similar environment, with the same type of lighting and frame composition, photorealistic style, high quality, detailed rendering of the face, clothing and background.`,
    images: [
      {"src": "img/author.webp", "caption": "Моё фото"},
      {"src": "img/a2.webp", "caption": "Результат"},
    ],
  },
  {
    id: 11,
    cat: "Фото",
    title: "Переодевание по референсу",
    attach: "",
    prompt: `Dress the woman from the first photo in this clothing. Show her down to the hips. In the background — a European street in summer.`,
    images: [
      {"src": "img/cards/slide-13-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 12,
    cat: "Фото",
    title: "Замена фона",
    attach: "",
    prompt: `Generate a photo where the woman from the first photo stands against the background from the second photo. She must look as if she was originally photographed in this place, fully and organically blended into the atmosphere and style of the scene. Match the perspective, lighting and direction of shadows with the surroundings. Keep the woman's appearance.`,
    images: [
      {"src": "img/cards/slide-15-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 13,
    cat: "Фото",
    title: "Смена сезона и времени суток",
    attach: "",
    prompt: `Change of season and time of day: make it winter, night, Christmas.`,
    images: [
      {"src": "img/cards/slide-16-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 14,
    cat: "Фото",
    title: "Селфи со звездой",
    attach: "",
    prompt: `Realistic POV selfie taken at arm's length by a young woman, the model's hand partially visible in the frame, close-up. The model, in clothing from the provided reference, poses with a light smile next to Henry Cavill as the Witcher, without clear facial recognition and without exact likeness. Geralt of Rivia is shown with the characteristic details of the look: white hair, scars, dark leather armor, a sword on his back. Location — the film set of the movie with Henry Cavill as the Witcher, with authentic cinematic surroundings and props that convey the atmosphere of active filming. In the background, elements of film production are visible: powerful spotlights, light stands, professional film cameras, sound equipment, a smoke machine and props. Cinematic light, deep shadows, high contrast, expressive depth of field, professional color grading. Very high detail, photorealistic execution, 8K resolution, realistic textures of skin, clothing and surroundings.`,
    images: [
      {"src": "img/cards/slide-18-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 15,
    cat: "Композиция",
    title: "Постер к супергеройскому фильму",
    attach: "",
    prompt: `Make a poster for a superhero blockbuster titled "Нечто", featuring these women and the man. The man is in a superhero look in a black suit without a mask.`,
    images: [
      {"src": "img/cards/slide-19-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 16,
    cat: "Композиция",
    title: "Групповое фото нескольких людей",
    attach: "",
    prompt: `Make a photo where all these people stand on a red carpet in evening outfits. They look at the camera, smile and do a group hug.`,
    images: [
      {"src": "img/cards/slide-20-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 17,
    cat: "Реклама",
    title: "Рекламный баннер FanTa Pomelo",
    attach: "",
    prompt: `Create a modern advertising banner for the carbonated drink FanTa Pomelo. Use this photo: a young stylish woman holds a bottle of FanTa Pomelo in her hand in a close-up, as the main accent of the composition. The bottle looks cold and fresh, with light drops of condensation emphasizing the feeling of coolness and juiciness. Make the banner bright, fresh and premium, like an ad for a famous international brand. Add the effect of the flavor coming alive around the bottle: soft splashes of citrus drink, pomelo slices, light-yellow translucent splashes, a soft glow, a feeling of summer freshness and invigorating energy. Visually create an association with a refreshing fruity taste and a moment of pleasure. Add text to the banner:

Large headline: "Взрыв свежести с первого глотка"
Subheadline: "Яркий вкус помело, прохлада и цитрусовое настроение в каждой капле"
Mini list: "Сочный вкус • Ледяная свежесть • Яркий летний вайб"
Button: "Попробовать FanTa Pomelo →"

Make the background light and juicy, with a soft gradient in shades of lime, citrus and warm sunny yellow. Add slight darkening or blur in the background for text readability. Use neat yellow-green and white accents, minimalism, modern typography, commercial style, premium advertising look, high-end retouch, sharp details, clean layout, banner ad design, realistic product presentation.`,
    images: [
      {"src": "img/cards/slide-23-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 18,
    cat: "Реклама",
    title: "Карточка товара для маркетплейса",
    attach: "",
    prompt: `Create a modern creative product card for a marketplace. The card must show a bright yellow travel suitcase, large and sharp, in the center of the composition, at a slight dynamic angle, as in a premium advertising shoot. The suitcase must look new, stylish, durable and visually expensive. Style: premium commercial design, clean minimal + bright accents, high-end retouch, sharp details, professional product photography. Background: white or a very light gradient with a warm sunny tint, with modern dynamic elements related to travel and ease of movement: soft abstract lines, smooth waves, graphic trajectories, a feeling of flight, freedom, vacation and comfort. You can add a light glow, airy shapes, minimalist travel accents. Color scheme: yellow as the main accent, plus white, light gray and a little warm orange for depth. Add a soft glow around the suitcase and a soft realistic shadow so that it looks three-dimensional, expensive and presentable. Place the text beautifully and in a modern way, with perfect typography, like in an ad for a famous brand. The text must be in Russian, readable, not overloaded.

Headline: "Яркий чемодан для легких путешествий"
Benefits:
1. "Прочный корпус и надежная защита вещей"
2. "Маневренные колеса 360°"
3. "Легкий, вместительный и удобный в поездке"
Badge: "ХИТ ДЛЯ ПУТЕШЕСТВИЙ"

The composition must be perfectly balanced: the product is the hero, the text does not cover the suitcase, everything looks like a premium advertising marketplace card. No people, no extra objects, no extra logos except the logo on the product itself. The final result must look like a finished product card for Wildberries, Ozon or Yandex Market.`,
    images: [
      {"src": "img/cards/slide-25-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 19,
    cat: "Дизайн",
    title: "Редизайн слайда презентации",
    attach: "",
    prompt: `Make a modern design of this slide, add icons, align the composition and the text, neat minimalism, clean style. Style as in the example in photo 2.`,
    images: [
      {"src": "img/cards/slide-26-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 20,
    cat: "Дизайн",
    title: "Копирование стиля текста",
    attach: "",
    prompt: `Replace the text with "Голубика", keep the style from the original image.`,
    images: [
      {"src": "img/cards/slide-27-compressed.webp", "caption": "Пример"},
      {"src": "img/cards/slide-28-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 21,
    cat: "Иллюстрация",
    title: "Новый персонаж в заданном стиле",
    attach: "",
    prompt: `In this style, make a female character waist-up holding a sword. Size 2:3.

And now a male knight with a battle axe.`,
    images: [
      {"src": "img/cards/slide-30-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 22,
    cat: "Иллюстрация",
    title: "Перевод персонажа в стиль Darkest Dungeon",
    attach: "",
    prompt: `Redo the character in image 1 in the illustration style of image 2. Take into account the colors, proportions, eyes, body parts and other details. Size as in the original.`,
    images: [
      {"src": "img/cards/slide-34-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 23,
    cat: "Иллюстрация",
    title: "Раскраска для детей",
    attach: "",
    prompt: `Make a line-art coloring page for children from this, without shadows or gradients.`,
    images: [
      {"src": "img/cards/slide-35-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 24,
    cat: "Иллюстрация",
    title: "Покраска манги и перевод",
    attach: "",
    prompt: `Fully color this manga page and translate the text into Russian.`,
    images: [
      {"src": "img/cards/slide-36-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 25,
    cat: "Фото",
    title: "Реставрация фото",
    attach: "",
    prompt: `Improve the quality of this photo, make it ultra-realistic and with modern colors.`,
    images: [
      {"src": "img/cards/slide-37-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 26,
    cat: "Сторителлинг",
    title: "Разворот детской книги",
    attach: "",
    prompt: `I need to make a children's book spread with text, showing 4 illustrations in anime style.`,
    images: [
      {"src": "img/cards/slide-38-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 27,
    cat: "Сторителлинг",
    title: "Страница комикса",
    attach: "",
    prompt: `Create a comic page of 7 frames with a battle between these characters, text in Russian and a happy ending. Size 3:4.`,
    images: [
      {"src": "img/cards/slide-39-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 28,
    cat: "Поза",
    title: "Референс позы",
    attach: "",
    prompt: `Based on this image, create a minimalist pose-reference illustration made only with thin red lines on a white background, without details of the face and clothing, a clear outline of the body and the main joints, even neat lines, in the style of a technical anatomical sketch.`,
    images: [
      {"src": "img/cards/slide-40-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 29,
    cat: "Поза",
    title: "Копия позы",
    attach: "",
    prompt: `Put the person in photo 1 strictly into the pose shown in drawing 2.`,
    images: [
      {"src": "img/author.webp", "caption": "Моё фото"},
      {"src": "img/a5.webp", "caption": "Результат: поза"},
    ],
  },
  {
    id: 30,
    cat: "Поза",
    title: "Фотореалистичный кадр по скетчу",
    attach: "",
    prompt: `Create a realistic photo based on this sketch.`,
    images: [
      {"src": "img/cards/slide-44-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 31,
    cat: "Поза",
    title: "Точка на карте -> фото",
    attach: "",
    prompt: `Create a realistic photo of the marked point on the map, strictly in the direction of the red arrow. Street-level view, natural colors, correct perspective and details.`,
    images: [
      {"src": "img/cards/slide-45-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 32,
    cat: "Поза",
    title: "Инструкция прямо на фото",
    attach: "",
    prompt: `Follow the instruction on the photo.`,
    images: [
      {"src": "img/cards/slide-46-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 33,
    cat: "UX/UI",
    title: "Wireframe для сайта психолога",
    attach: "",
    prompt: `Make a wireframe, a black-and-white drawing of the first screen of a psychologist's website.`,
    images: [
      {"src": "img/cards/slide-47-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 34,
    cat: "UX/UI",
    title: "UI-дизайн по прототипу",
    attach: "",
    prompt: `This is a layout of a website page. Turn it into a high-quality UX/UI design in accordance with the text comments on the sketch. Add sample images to the relevant sections. For the variant with the second result, take the design style from photo 2.`,
    images: [
      {"src": "img/cards/slide-48-compressed.webp", "caption": "Пример"},
      {"src": "img/cards/slide-49-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 35,
    cat: "Данные",
    title: "Современная диаграмма",
    attach: "",
    prompt: `I have this data, make a beautiful, modern chart out of it. Black background, green accent color. Size 16:9.`,
    images: [
      {"src": "img/cards/slide-51-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 36,
    cat: "Сторителлинг",
    title: "Раскадровка из одной фотографии",
    attach: "",
    prompt: `Full-bleed 3×3 storyboard grid, edge-to-edge imagery with minimal internal spacing, typography-free and label-free. Same character, same outfit, same environment, same lighting and color grading across all nine frames, based on a single reference photo. Cinematic fashion photography with strong perspective distortion created by camera height, distance, and lens choice; adjacent frames clearly differ in scale, framing, and camera plan rather than outfit or setting.

Frame 1: Extreme close-up portrait, camera slightly above eye level, face filling the frame, subtle forward lean, shallow depth of field.
Frame 2: Side profile medium close-up, camera at eye level, head and shoulders only, clean silhouette emphasis.
Frame 3: Three-quarter medium shot from a low angle, camera close to the torso, upper body dominant with perspective stretch.
Frame 4: Full-body wide shot, camera far back at eye level, neutral stance for scale reference.
Frame 5: Low-angle legs-only shot, camera near ground, feet and calves dominating the foreground.
Frame 6: Waist-level close shot, camera very close and angled upward, hips and hands emphasized.
Frame 7: Over-the-shoulder close-up from behind, head partially turned toward camera.
Frame 8: High-angle close shot from above, shoulders and head compressed diagonally in frame.
Frame 9: Extreme close-up detail shot, either eyes, hands, or footwear texture, macro-like proximity.

Consistent background, wardrobe, and mood across all frames; variation achieved only through camera distance, angle, and crop. High-fashion editorial style, clean color grading, sharp focus where close, natural falloff in wide shots.`,
    images: [
      {"src": "img/cards/slide-53-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 37,
    cat: "Иллюстрация",
    title: "Character sheet",
    attach: "",
    prompt: `Based on the uploaded photo, create a character sheet / turnaround sheet of the character as a neat collage. The main rule: do not describe or change the style — it must fully match the uploaded image. Keep the original visual style, lighting, textures, realism and materials exactly as in the photo. Keep the appearance, facial features, body proportions, hairstyle, clothing and its materials, and the color palette. The same character must be fully consistent in all views. You must not change the face, body shape, clothing details or proportions between frames.

Composition: a strict 4 by 3 grid, 12 images, neatly aligned, with equal gaps between frames.
Top row:
1. Full body, front view.
2. Full body, back view.
3. Waist-up, front view.
4. Waist-up, 3/4 turn.

Middle row:
5. Face, front view.
6. Face, 3/4 turn.
7. Face, profile.
8. Face, slightly from above.

Bottom row:
9. Eyes close-up.
10. Nose close-up.
11. Lips close-up.
12. Eyes and nose together, 3/4 turn.

Requirements: full body always without cropping, the character stands straight, neutral pose, calm facial expression, all views sharp and readable, without perspective distortion and without artistic interpretation. Background — pure white (#ffffff), even, without gradients and textures, without extra objects.

Forbidden: changing the image style, adding new details, changing the clothing or colors, making different faces in different frames, turning it into 3D, an illustration or a render, adding text, captions, logos or graphic elements. This must be a clean professional character reference sheet, not a poster.`,
    images: [
      {"src": "img/cards/slide-55-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 38,
    cat: "Эволюция",
    title: "Эволюция персонажа",
    attach: "",
    prompt: `This is the first stage of the character's development. There are 4 stages in total. Make the next, second stage of its development, add appropriate details. Keep the pose, drawing style and background. Place it in the center of the frame.

Now make the third stage. Add appropriate details. Make it more epic and more grown-up. Keep the pose, drawing style and background.

Now make the fourth, final stage. Make it as epic and grown-up as possible. Keep the pose, drawing style and background.`,
    images: [
      {"src": "img/cards/slide-56-compressed.webp", "caption": "Пример"},
    ],
  },
  {
    id: 39,
    cat: "Эволюция",
    title: "Эволюция иконки",
    attach: "",
    prompt: `This is an icon for a website, simple, the first version. There are 4 versions of the icon in total, each must be more complex than the previous one but keep the style. Make the next, second version of this icon, add appropriate details.

Now make the third version, add appropriate details, make it a little more complex.

Now make the fourth, final version: make it more complex and as cool as possible.`,
    images: [
      {"src": "img/cards/slide-57-compressed.webp", "caption": "Пример"},
    ],
  },
];
