import { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Modal from './Modal';
import './NetworkDiagram.css';

// Node content data
const nodeData = {
  'theory-of-mind': {
    title: 'AI That Actually Understands You',
    blurb: "Our AI builds a deep psychological model of each student through personal anecdotes and guided introspection. It doesn't just edit - it helps you discover your authentic voice.",
  },
  'peer-feedback': {
    title: 'Three Layers of Insight',
    blurb: 'Small group cohorts (8 students max) combine self-reflection, peer perspectives, and expert essay coach guidance. Multiple viewpoints, one cohesive story.',
  },
  'psych-profile': {
    title: 'Science-Backed Personalization',
    blurb: 'Starting with Gallup StrengthsFinder and real behavioral indicators, we create a comprehensive profile that informs every AI interaction and coaching session.',
  },
  'curriculum': {
    title: 'Structured Journey',
    blurb: "Expert-crafted prompts and assignments guide students through 8 weeks of self-discovery. The AI adapts to you, but the roadmap keeps you on track.",
  },
  'your-story': {
    title: 'The Result: Authentic Essays',
    blurb: "All components work together to help students craft college essays that admissions officers remember - because they sound like a real person, not a consultant.",
  },
};

// Initial nodes configuration
const initialNodes = [
  {
    id: 'your-story',
    type: 'default',
    position: { x: 400, y: 300 },
    data: { label: 'Your Story' },
    className: 'central-node',
  },
  {
    id: 'theory-of-mind',
    type: 'default',
    position: { x: 50, y: 150 },
    data: { label: 'Theory of Mind\nAI Engine' },
    className: 'input-node',
  },
  {
    id: 'peer-feedback',
    type: 'default',
    position: { x: 350, y: 50 },
    data: { label: 'Peer, Self,\nExpert Feedback' },
    className: 'input-node',
  },
  {
    id: 'psych-profile',
    type: 'default',
    position: { x: 650, y: 150 },
    data: { label: 'Psychologically\nMotivated Profile' },
    className: 'input-node',
  },
  {
    id: 'curriculum',
    type: 'default',
    position: { x: 400, y: 500 },
    data: { label: 'Curriculum' },
    className: 'bottom-node',
  },
];

// Initial edges configuration (curved, flowing arrows)
const initialEdges = [
  {
    id: 'e-theory-story',
    source: 'theory-of-mind',
    target: 'your-story',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#6366F1',
    },
    style: { stroke: '#6366F1', strokeWidth: 2 },
  },
  {
    id: 'e-peer-story',
    source: 'peer-feedback',
    target: 'your-story',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#8B5CF6',
    },
    style: { stroke: '#8B5CF6', strokeWidth: 2 },
  },
  {
    id: 'e-psych-story',
    source: 'psych-profile',
    target: 'your-story',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#EC4899',
    },
    style: { stroke: '#EC4899', strokeWidth: 2 },
  },
  {
    id: 'e-curriculum-story',
    source: 'curriculum',
    target: 'your-story',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#10B981',
    },
    style: { stroke: '#10B981', strokeWidth: 2 },
  },
];

function NetworkDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  // Handle node click
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode({
      id: node.id,
      ...nodeData[node.id],
    });
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="network-diagram-container">
      <div className="diagram-header">
        <h1>How YouLab Works</h1>
        <p>Click on any component to learn more about our integrated approach</p>
      </div>

      <div className="diagram-wrapper">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          attributionPosition="bottom-right"
        >
          <Controls />
          <MiniMap
            nodeColor={(node) => {
              if (node.id === 'your-story') return '#6366F1';
              if (node.id === 'theory-of-mind') return '#6366F1';
              if (node.id === 'peer-feedback') return '#8B5CF6';
              if (node.id === 'psych-profile') return '#EC4899';
              if (node.id === 'curriculum') return '#10B981';
              return '#ddd';
            }}
            maskColor="rgba(0, 0, 0, 0.05)"
          />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>

      {selectedNode && (
        <Modal
          title={selectedNode.title}
          content={selectedNode.blurb}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default NetworkDiagram;
