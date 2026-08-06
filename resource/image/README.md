# 关于本文件夹

- 本文件夹内的所有`.avif`格式的图片均**由`ffmpeg`转码生成**（转码后图片分辨率不变）。

## 关于音乐封面

- 鉴于原封面（`.jpg`格式，`2500x2500`分辨率）占用内存过大，为保证在`GitHub`带宽内使封面完全加载，本站音乐封面**采用`.avif`格式**（压缩率极高）。

```bash
ffmpeg -i <source>.jpg -c:v libaom-av1 -still-picture 1 <target>.avif
```

## 关于背景图

- 背景图来源：

    1.[蔚蓝档案（中国）](https://bluearchive-cn.com/)

    2.[基沃wiki > 画廊](https://kivo.wiki/gallery/)

- 鉴于一些原背景图（`.jpeg`格式，`2K`分辨率）占用内存过大，为保证在`GitHub`带宽内使背景图完全加载，本站所有原`.jpeg`背景图**采用`.avif`格式**（压缩率极高），其余不变。

```bash
echo Original filenames are strictly in order.
for /l %%i in (1,1,8) do (
 ffmpeg -i .jpeg\%%i.jpeg -c:v libaom-av1 -still-picture 1 .avif\%%i.avif
)
```
