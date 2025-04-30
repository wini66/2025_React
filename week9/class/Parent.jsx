function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }
  function handleChildClick(event) {
    event.stopPropagation();
    alert("자식 요소 클릭!");
    //ctrl /로 //지우기 가능
  }
  return (
    <div
      onClick={handleParentClick}
      style={{ padding: "20px", background: "#ddd" }}
    >
      <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
export default Parent;
