import { KanbanSquare, Layers, ShoppingBag, ShoppingCart } from "lucide-react";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar({ visible }: { visible: boolean }) {
  return (
    <aside
      className={`fixed xl:relative ${
        visible ? "w-[300px] xl:w-1/5" : "w-0 xl:w-1/5"
      } z-10 xl:flex xl:flex-col shadow-xl duration-700 
        px-4 h-[95vh] bg-white rounded-2xl `}
    >
      <div className={`flex w-full py-4 px-2 justify-center items-center`}>
        <span
          className={`${
            !visible && "scale-0 xl:scale-100"
          } duration-300 font-semibold text-lg`}
        >
          LOGO
        </span>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-4" />

      <div
        className={`${
          !visible && "scale-0 xl:scale-100"
        } duration-300 flex flex-col space-y-4`}
      >
        <SidebarMenu href="/" title="Dashboard">
          <KanbanSquare />
        </SidebarMenu>

        <SidebarMenu href="/transaction" title="Transaction">
          <ShoppingCart />
        </SidebarMenu>

        <SidebarMenu href="/category" title="Product Category">
          <Layers />
        </SidebarMenu>

        <SidebarMenu href="/product" title="Product">
          <ShoppingBag />
        </SidebarMenu>
      </div>
    </aside>
  );
}
