import { DialogBase } from '@/components/custom/dialog/DialogBase';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BOAndFamilyPage() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>BO & Family</h1>
      <Button onClick={() => navigate('/portal')}>Back</Button>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="mt-4 flex"
      >
        Example Dialog
      </Button>
      <DialogBase
        open={isOpen}
        onOpenChange={setIsOpen}
        showCloseButton
        contentClassName="space-y-4"
        onInteractOutside
        header={'Custom Header'}
        variant="sm"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button>Save</Button>
          </div>
        }
      >
        <div className="w-[1000px]">
          Custom content here Custom content hereCustom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content here Custom content here Custom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content here Custom content here Custom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content hereCustom content hereCustom content here Custom content here
          Custom content hereCustom content hereCustom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content here Custom content here Custom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content here Custom
          content here Custom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content hereCustom content hereCustom content hereCustom content
          hereCustom content hereCustom content hereCustom content hereCustom
          content hereCustom content here
        </div>
      </DialogBase>
    </div>
  );
}

export default BOAndFamilyPage;
