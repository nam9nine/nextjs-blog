export type BannerData = {
  message: string;
  state: "success" | "error";
};

export default function BannerCompo({ banner }: { banner: BannerData }) {
  const isSuccess = banner.state === "success";
  const icon = isSuccess ? "✅" : "❌";
  return (
    <>
      {isSuccess && (
        <h2
          className={`w-full rounded-xl p-2 text-center ${
            isSuccess ? "bg-green-300" : "bg-red-400"
          }`}
        >
          {icon} {banner.message}
        </h2>
      )}
    </>
  );
}
