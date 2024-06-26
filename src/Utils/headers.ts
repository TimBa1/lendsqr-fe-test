const token = "11b37gkac59r3dl4d62hm4ljowtsfqutcawusfhl";

const authHeader = () => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
});

export default authHeader;
