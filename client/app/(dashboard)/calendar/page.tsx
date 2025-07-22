export default function CalendarScreen() {
  return (
    <div
      className="flex items-center justify-center bg-gray-50 px-4 text-center"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      <div className="max-w-xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          🚧 Calendar Page Under Development
        </h1>
        <p className="text-gray-600 mb-6">
          We are currently working on this page. Meanwhile, the{" "}
          <strong>Settings</strong> screen is ready. Click the{" "}
          <strong>Settings</strong> tab below to check it out.
        </p>
        <p className="text-sm text-gray-400">Thanks for your patience!</p>
      </div>
    </div>
  );
}
