import React from 'react';

export default function ServiceCard({ title, description, icon: Icon }) {
 return (
   <div
     className="
       group relative overflow-hidden rounded-2xl bg-white shadow
       transition-transform duration-300
       hover:-translate-y-1 hover:shadow-xl
     "
   >
     {/* 배경 장식용 라이트 그라데이션 */}
     <div
       className="
         absolute inset-0 opacity-0 group-hover:opacity-100
         bg-gradient-to-br from-brandPurple/20 via-brandGreen/15 to-transparent
         transition-opacity duration-300
       "
     />
     <div className="relative z-10 p-6 flex flex-col gap-4">
       {Icon && <Icon className="w-10 h-10 text-brandGreen" />}
       <h3 className="text-xl font-semibold text-brandPurple">{title}</h3>
       <p className="text-gray-600 leading-relaxed">{description}</p>
     </div>
   </div>
 );
}