import React from 'react';
import { MemberCard, User } from './MemberCard';

interface MemberSectionProps {
  members: User[];
  loading: boolean;
  error: Error | null;
}

export const MemberSection: React.FC<MemberSectionProps> = ({ members, loading, error }) => {
  return (
    <div className="
      bg-white rounded-b-2xl 
      border-t-2 border-slate-100 
      p-6 pt-5
      animate-slideDown isolate
    ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="m-0 text-primary-black text-lg font-semibold">
          Members
        </h3>
        {!loading && !error && (
          <span className="bg-primary-blue/10 text-primary-blue py-1 px-2 rounded-full text-xs font-semibold">
            {members.length} {members.length === 1 ? 'member' : 'members'}
          </span>
        )}
      </div>

      {loading && (
        <div className="text-center p-10 text-secondary-gray">
          <div className="inline-block w-8 h-8 border-[3px] border-secondary-gray/30 border-t-primary-blue rounded-full animate-spin mb-3" />
          <p className="m-0 text-sm">Loading members...</p>
        </div>
      )}

      {error && (
        <div className="text-center p-5 text-primary-red bg-primary-red/5 rounded-lg border border-primary-red/20">
          <p className="m-0 text-sm">
            Failed to load members: {error.message}
          </p>
        </div>
      )}

      {!loading && !error && members.length === 0 && (
        <div className="text-center p-10 text-primary-gray bg-secondary-yellow/50 rounded-lg border border-primary-yellow">
          <p className="m-0 text-sm">
            No members found in this group.
          </p>
        </div>
      )}

      {!loading && !error && members.length > 0 && (
        <div className="overflow-x-auto overflow-y-hidden smooth-scroll pb-2.5 animate-slideUp">
          <div className="flex gap-4 pr-5 min-w-min">
            {members.map((member) => (
              <div key={member.uId} className="flex-shrink-0">
                <MemberCard user={member} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
