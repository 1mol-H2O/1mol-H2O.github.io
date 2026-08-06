for /l %%i in (1,1,8) do (
	ffmpeg -i .jpeg\%%i.jpeg -c:v libaom-av1 -still-picture 1 .avif\%%i.avif
)