import React from 'react';
import { useFeaturedGroups } from './hooks/useFeaturedGroups';
import { GroupCard } from './components/GroupCard';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const FeaturedGroupsPage = () => {
  const { groups, loading, error } = useFeaturedGroups();

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main style={{ padding: '40px 20px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            width: '40px',
            height: '40px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '16px'
          }} />
          <p style={{ color: '#6b7280', fontSize: '1.1em' }}>Loading featured groups...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main style={{ padding: '40px 20px', textAlign: 'center' }}>
          <div style={{
            color: '#dc2626',
            backgroundColor: '#fef2f2',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #fecaca',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <h2 style={{ margin: '0 0 8px 0' }}>Error Loading Groups</h2>
            <p style={{ margin: '0' }}>{error.message}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '2.5em', 
            fontWeight: '700', 
            color: '#1f2937',
            margin: '0 0 16px 0'
          }}>
            Featured Groups
          </h1>
          <p style={{ 
            fontSize: '1.1em', 
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover and connect with amazing communities. Click on any group to explore its members.
          </p>
        </div>

        {groups.length > 0 ? (
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '32px',
            justifyContent: 'center',
            alignItems: 'start'
          }}>
            {groups.map(group => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: '#6b7280',
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#4b5563' }}>No Groups Found</h3>
            <p style={{ margin: '0' }}>Check back later for featured groups.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FeaturedGroupsPage;
