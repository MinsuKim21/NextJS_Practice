import Hello from "@/components/Hello";

export default function Home() {
  return <main className="page">
    <Hello/>
    <div className="">
      Featured post 선택된 post만 보여주기
    </div>
    <div>
      you may like Featured post 제외한 post 보여주기 carousel
    </div>
  </main>;
}
