import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const FAQItem = ({ question, answer, isOpen = false }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="py-6">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isExpanded ? (
          <MinusCircle className="h-6 w-6 text-gray-400" />
        ) : (
          <PlusCircle className="h-6 w-6 text-gray-400" />
        )}
      </button>
      {isExpanded && (
        <div className="mt-3">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};
export default FAQItem;
