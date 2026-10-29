for /l %%i in (13,1,18) do (
	ffmpeg -i jpg\%%i.jpg -c:v libaom-av1 -still-picture 1 avif\%%i.avif
)