# YouLab Network Diagram

An interactive React Flow network diagram showcasing how YouLab's components work together to help students craft authentic college essays.

## Features

- **Interactive Network Visualization**: Click on any node to learn more about that component
- **Smooth Animations**: Nodes animate in with staggered timing, edges flow with animated transitions
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Premium Aesthetic**: Professional color scheme with blues, purples, and accent colors
- **Draggable Nodes**: Users can drag nodes around for exploration
- **Zoom & Pan Controls**: Built-in controls for navigating the diagram

## Diagram Structure

The diagram visualizes the YouLab system with 5 key nodes:

1. **Your Story** (Center) - The ultimate result of the program
2. **Theory of Mind AI Engine** (Left) - AI-powered personalization
3. **Peer, Self, Expert Feedback** (Top) - Multi-layered feedback system
4. **Psychologically Motivated Profile** (Right) - Science-backed assessment
5. **Curriculum** (Bottom) - Structured 8-week journey

All nodes point to the central "Your Story" node, showing how they work together.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI framework
- **React Flow** - Network diagram library
- **Vanilla CSS** - Custom styling (no framework dependencies)

## Installation

1. Navigate to the network-diagram directory:
   ```bash
   cd network-diagram
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to any static hosting service.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Usage

- **Click any node** to see detailed information about that component
- **Drag nodes** to rearrange the diagram layout
- **Use controls** in the bottom-left to zoom in/out and fit view
- **Click outside modal** or press ESC to close the information popup

## Color Scheme

- Primary Blue: `#6366F1`
- Purple: `#8B5CF6`
- Pink: `#EC4899`
- Green: `#10B981`
- Background Gradient: Blue to Purple

## File Structure

```
network-diagram/
├── src/
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── NetworkDiagram.jsx      # Network diagram component
│   ├── NetworkDiagram.css      # Diagram styles
│   ├── Modal.jsx               # Modal/popover component
│   ├── Modal.css               # Modal styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Customization

To modify node content, edit the `nodeData` object in `src/NetworkDiagram.jsx`.

To adjust colors, update the color values in `src/NetworkDiagram.css` and `src/Modal.css`.

To change the layout, modify the `position` values in the `initialNodes` array in `src/NetworkDiagram.jsx`.

## Browser Support

Supports all modern browsers (Chrome, Firefox, Safari, Edge). Requires JavaScript enabled.

## License

UNLICENSED - Private project for YouLab

---

Built with ❤️ for YouLab
