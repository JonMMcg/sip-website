import React from 'react';
import { useFeaturedGroups } from './hooks/useFeaturedGroups';
import { GroupCard } from './components/GroupCard';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const FeaturedGroupsPage = () => {
  const { groups, loading, error } = useFeaturedGroups();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center text-center px-5">
          <div>
            <div className="inline-block w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground text-lg">Loading featured groups...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center text-center px-5">
          <div className="text-destructive-foreground bg-destructive p-5 rounded-lg border border-destructive max-w-lg mx-auto">
            <h2 className="m-0 mb-2 font-bold text-lg">Error Loading Groups</h2>
            <p className="m-0">{error.message}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-5 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Featured Groups
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover and connect with amazing communities. Click on any group to explore its members.
          </p>
        </div>

        {groups.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
            {groups.map(group => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-5 text-muted-foreground bg-muted rounded-lg border">
            <h3 className="m-0 mb-2 text-foreground font-semibold">No Groups Found</h3>
            <p className="m-0">Check back later for featured groups.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FeaturedGroupsPage;
