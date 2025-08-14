import React from 'react';

interface GroupCardHeaderProps {
  groupImage: string | null;
  groupName: string | null;
  isExpanded: boolean;
  scrollOffset: number;
}

export const GroupCardHeader: React.FC<GroupCardHeaderProps> = ({
  groupImage,
  groupName,
  isExpanded,
  scrollOffset,
}) => {
  return (
    <div style={{ 
      position: 'relative',
      height: '280px',
      overflow: 'hidden',
      borderRadius: '24px 24px 0 0'
    }}>
      <img 
        src={groupImage || '/placeholder-group.png'} 
        alt={groupName || 'Group'} 
        style={{ 
          width: '100%', 
          height: '120%', // Slightly larger to allow parallax movement
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
          transform: `translateY(${scrollOffset}px) scale(${isExpanded ? 1.02 : 1})`,
          willChange: 'transform'
        }} 
        onMouseEnter={(e) => {
          const currentTransform = e.currentTarget.style.transform;
          e.currentTarget.style.transform = currentTransform.replace(/scale\([^)]*\)/, 'scale(1.05)');
        }}
        onMouseLeave={(e) => {
          const currentTransform = e.currentTarget.style.transform;
          e.currentTarget.style.transform = currentTransform.replace(/scale\([^)]*\)/, `scale(${isExpanded ? 1.02 : 1})`);
        }}
      />
      
      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
        zIndex: 1
      }} />
      
      {/* Animated Background Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
        `,
        opacity: isExpanded ? 0.7 : 0.3,
        transition: 'opacity 0.4s ease',
        zIndex: 0,
        transform: `translateY(${scrollOffset * 0.2}px)`,
        willChange: 'transform'
      }} />
    </div>
  );
};
