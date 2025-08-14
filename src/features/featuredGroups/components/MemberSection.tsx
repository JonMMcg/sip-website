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
        <h3 className="m-0 text-gray-800 text-lg font-semibold">
          Members
        </h3>
        {!loading && !error && (
          <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs font-semibold">
            {members.length} {members.length === 1 ? 'member' : 'members'}
          </span>
        )}
      </div>

      {loading && (
        <div className="text-center p-10 text-slate-500">
          <div className="inline-block w-8 h-8 border-[3px] border-slate-200 border-t-blue-600 rounded-full animate-spin mb-3" />
          <p className="m-0 text-sm">Loading members...</p>
        </div>
      )}

      {error && (
        <div className="text-center p-5 text-red-700 bg-red-50 rounded-lg border border-red-200">
          <p className="m-0 text-sm">
            Failed to load members: {error.message}
          </p>
        </div>
      )}

      {!loading && !error && members.length === 0 && (
        <div className="text-center p-10 text-slate-500 bg-slate-50 rounded-lg border border-slate-200">
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
