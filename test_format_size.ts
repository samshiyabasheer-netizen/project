import { formatSize } from "./app/lib/utils";

console.log("0 bytes:", formatSize(0));
console.log("500 bytes:", formatSize(500));
console.log("1024 bytes:", formatSize(1024));
console.log("1500 bytes:", formatSize(1500));
console.log("1048576 bytes (1MB):", formatSize(1048576));
console.log("1073741824 bytes (1GB):", formatSize(1073741824));
