import React from 'react'
interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let bgColor = 'bg-badge-red';
  let textColor = 'text-red-600';
  let label = 'Needs Work';

  if (score > 70) {
    bgColor = 'bg-badge-green';
    textColor = 'text-green-600';
    label = 'Strong';
  } else if (score > 49) {
    bgColor = 'bg-badge-yellow';
    textColor = 'text-yellow-600';
    label = 'Good Start';
  }

  return (
    <div className={`${bgColor} px-3 py-1 rounded-full w-fit`}>
      <p className={`${textColor} text-xs font-semibold`}>
        {label}
      </p>
    </div>
  );
};

export default ScoreBadge;
