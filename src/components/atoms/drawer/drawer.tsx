import { FC, PropsWithChildren } from 'react';

interface DrawerProps extends PropsWithChildren {
  isOpen?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  variant?: 'temporary' | 'permanent';
  onClickOutside?: () => void;
}

const Drawer: FC<DrawerProps> = ({ children, isOpen, variant }) => {
  return (
    <aside
      className={
        'overflow-hidden fixed h-screen z-10 bg-slate-900 text-slate-50 bg-opacity-25 inset-0 transform ease-in-out ' +
        (variant === 'permanent' ? 'max-w-72' : '') +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-400 opacity-0 -translate-x-full  ')
      }
    >
      <section
        className={
          '  left-0 absolute bg-slate-900 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : '-translate-x-full ')
        }
      >
        <article className="relative w-screen max-w-72 pb-10 flex flex-col space-y-6 overflow-auto h-full">
          {children}
        </article>
      </section>
      {variant === 'temporary' && (
        <section
          role="button"
          className=" w-screen h-screen cursor-pointer "
          onClick={() => {
            console.warn('click');
          }}
          onKeyDown={(key) => console.warn(key)}
          tabIndex={-1}
        />
      )}
    </aside>
  );
};

export default Drawer;
