import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function CallPlanCallMemoPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>CallPlan / CallMemo</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
      <div className="mt-4">
        <h1 className="text-2xl">===Font===</h1>
        <p className="text-red-500">// Thin (100)</p>
        <div className="font-thin">ข้อความ</div>
        <div className="font-thin italic">ข้อความตัวเอียง</div>
        <p className="text-red-500">// Ultra Light (200)</p>
        <div className="font-extralight">ข้อความ</div>
        <div className="font-extralight italic">ข้อความตัวเอียง</div>
        <p className="text-red-500">// Light (300)</p>
        <div className="font-light">ข้อความ</div>
        <div className="font-light italic">ข้อความตัวเอียง</div>
        <p className="text-red-500">// Regular (400 - default)</p>
        <div>ข้อความปกติ</div>
        <div className="italic">ข้อความเอียง</div>
        <p className="text-red-500">// Medium (500)</p>
        <div className="font-medium">ข้อความ</div>
        <div className="font-medium italic">ข้อความตัวเอียง</div>
        <p className="text-red-500">// Bold (700)</p>
        <div className="font-bold">ข้อความ</div>
        <div className="font-bold italic">ข้อความตัวเอียง</div>
        <p className="text-red-500">// Black (900)</p>
        <div className="font-black">ข้อความ</div>
        <div className="font-black italic">ข้อความตัวเอียง</div>
      </div>
    </div>
  );
}

export default CallPlanCallMemoPage;
