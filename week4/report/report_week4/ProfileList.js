// ProfileList.js
//  report_week4/images 폴더에서 이미지 파일을 import
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import ProfileCard from "./ProfileCard";

import React from "react";

const ProfileList = () => {
  // 프로필 데이터 배열에 이미지 경로 포함
  const profiles = [
    {
      name: "Haeundae",
      role: "Haeundae is Busan's representative beach, and is an attractive place with clean sea and wide white sand. ",
      imageUrl: image1, // 로컬 이미지 경로
    },
    {
      name: "Gamcheon Culture Village",
      role: "Gamcheon Culture Village is Busan's representative mural village, and is popular with tourists because of its colorful murals and cute houses.",
      imageUrl: image2, // 로컬 이미지 경로
    },
    {
      name: "Taejongdae",
      role: "Taejongdae is a natural tourist attraction where you can enjoy the beautiful coastal scenery of Busan. ",
      imageUrl: image3, // 로컬 이미지 경로
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      {profiles.map((profile, index) => (
        // 각 프로필 정보를 ProfileCard 컴포넌트로 전달
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default ProfileList;
