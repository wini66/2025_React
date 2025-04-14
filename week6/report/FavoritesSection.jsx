import { ChevronUp, ChevronDown, X } from "lucide-react";
import React, { useState } from "react";

export default function FavoritesSection({
  favorites,
  policies,
  onRemoveFavorite,
}) {
  const [showFavorites, setShowFavorites] = useState(true);
  const favoritePolicies = policies.filter((policy) =>
    favorites.includes(policy.id)
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">즐겨찾기</h2>
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="text-blue-600 flex items-center text-sm hover:underline"
        >
          {showFavorites ? (
            <>
              <span>숨기기</span>
              <ChevronUp className="ml-1" size={16} />
            </>
          ) : (
            <>
              <span>보기</span>
              <ChevronDown className="ml-1" size={16} />
            </>
          )}
        </button>
      </div>

      {showFavorites && favoritePolicies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritePolicies.map((policy) => (
            <div
              key={policy.id}
              className="bg-white shadow-lg rounded-2xl p-5 transition hover:shadow-xl"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-base">
                  {policy.title}
                </span>
                <button
                  onClick={() => onRemoveFavorite(policy.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showFavorites && favoritePolicies.length === 0 && (
        <div className="mt-6 text-center text-blue-600 text-base">
          즐겨찾기 목록이 비어 있습니다.
        </div>
      )}
    </div>
  );
}
