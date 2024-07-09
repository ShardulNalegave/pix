
import { IconMinus, IconX } from '@tabler/icons-react';
import { Window } from '@tauri-apps/api/window';
const appWindow = new Window('main');

export function TitleBar() {
  return (
    <div data-tauri-drag-region className='py-[3px] bg-primary flex items-center select-none border-b-[0.5px] border-solid border-black border-opacity-50'>
      <div className="flex-none ml-[15px]">
        <h1 className="text-sm font-mono font-bold">Pix</h1>
      </div>
      <div className="grow"></div>
      <div className="flex-none">
        <IconMinus className='inline-block p-[5px] cursor-pointer' onClick={() => appWindow.minimize()} />
        <div className='w-[5px] inline-block'></div>
        <IconX className='inline-block p-[5px] cursor-pointer' onClick={() => appWindow.close()} />
        <div className='w-[8px] inline-block'></div>
      </div>
    </div>
  );
}