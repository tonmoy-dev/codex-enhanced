import { useStore, demoChatlog } from "../services/store";

function SideNav() {
  const { appChatlog, setAppChatlog } = useStore();

  const handleChatlogs = () => {
    setAppChatlog([...demoChatlog]);
  };
  return (
    <aside className="sidenav">
      <div>
        <button onClick={handleChatlogs} className="side-nav-btn">
          <span>+</span>
          New Chat
        </button>
      </div>
    </aside>
  );
}
export default SideNav;
