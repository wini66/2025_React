import { Heart, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export default function PolicyCard({ policy, isFavorite, onToggleFavorite }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
            {policy.category}
          </span>
          <button
            onClick={onToggleFavorite}
            className="text-gray-400 hover:text-red-500 transition"
            aria-label={isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
          >
            <Heart
              size={20}
              fill={isFavorite ? "#ef4444" : "none"}
              color={isFavorite ? "#ef4444" : "currentColor"}
            />
          </button>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {policy.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600">{policy.description}</p>

        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              신청기간: {policy.applicationPeriod}
            </span>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-blue-600 text-sm font-medium hover:underline"
            >
              {expanded ? (
                <>
                  <span>접기</span>
                  <ChevronUp size={16} className="ml-1" />
                </>
              ) : (
                <>
                  <span>자세히</span>
                  <ChevronDown size={16} className="ml-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-5 pb-5 pt-2 bg-blue-50">
          <div className="text-sm text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">지원대상:</span>{" "}
              {policy.eligibility}
            </p>
            <p className="mb-2">
              <span className="font-semibold">지원내용:</span> {policy.benefit}
            </p>
            <a
              href={policy.url}
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
            >
              신청하기
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
