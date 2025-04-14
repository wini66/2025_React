import FavoritesSection from "./FavoritesSection";
import Footer from "./Footer";
import Header from "./Header";
import Notification from "./Notification";
import PolicyCard from "./PolicyCard";
import PolicyInfoSection from "./PolicyInfoSection";
import SearchFilter from "./SearchFilter";

import {
  Search,
  Heart,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";
import React, { useState } from "react";

const policyData = [
  {
    id: 1,
    title: "부산 청년 주거 안정 지원 사업",
    category: "주거",
    eligibility: "만 19세 ~ 34세 부산 거주 청년",
    description:
      "주택 임대료 지원 및 청년 전용 임대주택 공급을 통한 주거 안정화 지원",
    applicationPeriod: "2025년 5월 1일 ~ 5월 31일",
    benefit: "월 임대료 최대 20만원 지원, 최대 12개월",
    url: "#",
  },
  {
    id: 2,
    title: "부산 청년 취업 역량강화 프로그램",
    category: "취업",
    eligibility: "만 18세 ~ 34세 부산 거주 미취업 청년",
    description:
      "취업역량 강화를 위한 교육 및 멘토링 제공, 취업 준비 지원금 지급",
    applicationPeriod: "상시 접수",
    benefit: "교육 프로그램 무료 참여, 취업준비금 최대 50만원",
    url: "#",
  },
  {
    id: 3,
    title: "부산 청년 창업 지원 사업",
    category: "창업",
    eligibility: "만 19세 ~ 39세 부산 거주 예비창업자 및 3년 이내 창업자",
    description: "창업 공간 제공, 사업화 자금 지원, 멘토링 및 컨설팅 제공",
    applicationPeriod: "2025년 4월 15일 ~ 5월 15일",
    benefit: "사업화 자금 최대 3천만원, 창업 공간 최대 2년 무상 지원",
    url: "#",
  },
  {
    id: 4,
    title: "부산 청년 문화예술 활동 지원",
    category: "문화",
    eligibility: "만 19세 ~ 34세 부산 거주 문화예술 활동 청년",
    description: "청년 문화예술인의 창작활동 및 프로젝트 지원",
    applicationPeriod: "2025년 3월 1일 ~ 3월 31일",
    benefit: "프로젝트당 최대 500만원 지원",
    url: "#",
  },
  {
    id: 5,
    title: "부산 청년 금융 지원 사업",
    category: "금융",
    eligibility: "만 19세 ~ 34세 부산 거주 청년",
    description: "청년 대상 저금리 대출 지원 및 금융 교육 프로그램 제공",
    applicationPeriod: "상시 접수",
    benefit: "최대 1천만원 저금리 대출, 금융 상담 서비스",
    url: "#",
  },
  {
    id: 6,
    title: "부산 청년 복지카드 사업",
    category: "복지",
    eligibility: "만 19세 ~ 29세 부산 거주 청년",
    description:
      "문화, 체육, 교통 등 다양한 분야에서 사용 가능한 복지카드 지급",
    applicationPeriod: "2025년 6월 1일 ~ 6월 30일",
    benefit: "연간 50만원 청년복지카드 지급",
    url: "#",
  },
];

export default function BusanYouthPolicyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [favorites, setFavorites] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const categories = [
    "전체",
    ...new Set(policyData.map((policy) => policy.category)),
  ];

  const filteredPolicies = policyData.filter((policy) => {
    const matchesSearch =
      policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "전체" || policy.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const showAlert = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const toggleFavorite = (policyId) => {
    if (favorites.includes(policyId)) {
      setFavorites(favorites.filter((id) => id !== policyId));
      showAlert("즐겨찾기에서 삭제되었습니다.");
    } else {
      setFavorites([...favorites, policyId]);
      showAlert("즐겨찾기에 추가되었습니다.");
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen font-sans">
      <Header
        title="부산 청년 정책 안내"
        subtitle="부산 청년들을 위한 다양한 지원 정책을 확인하세요"
        logoText="부산청년ON"
      />
      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      {favorites.length > 0 && (
        <FavoritesSection
          favorites={favorites}
          policies={policyData}
          onRemoveFavorite={toggleFavorite}
        />
      )}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
          정책 목록
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPolicies.length > 0 ? (
            filteredPolicies.map((policy) => (
              <PolicyCard
                key={policy.id}
                policy={policy}
                isFavorite={favorites.includes(policy.id)}
                onToggleFavorite={() => toggleFavorite(policy.id)}
              />
            ))
          ) : (
            <div className="col-span-3 flex flex-col items-center justify-center py-16">
              <AlertCircle className="text-blue-300 mb-4" size={56} />
              <p className="text-blue-600 text-xl">검색 결과가 없습니다</p>
            </div>
          )}
        </div>
      </div>
      <PolicyInfoSection />
      <Footer />
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
}
