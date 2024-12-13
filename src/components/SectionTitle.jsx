import React from 'react';

const SectionTitle = ({ title }) => {

    return (
        <div className="flex gap-10 justify-center items-center py-10">
            <div className="w-60 h-[2px] bg-[rgb(101,156,200)]">
            </div>
            <h1 className="text-3xl text-slate-300">
                {title}
            </h1>
            <div className="w-60 h-[2px] bg-[rgb(101,156,200)]">
            </div>
        </div>
    );
};

export default SectionTitle;