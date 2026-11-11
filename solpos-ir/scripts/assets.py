from PIL import Image, ImageDraw, ImageFilter
import sys
M='../src/ppt/media/'; A='assets/'
# SP logo: transparent navy + white versions
im=Image.open(M+'image-1-1.png').convert('RGB'); w,h=im.size
navy=Image.new('RGBA',(w,h)); white=Image.new('RGBA',(w,h))
px=im.load(); pn=navy.load(); pw=white.load()
for y in range(h):
  for x in range(w):
    r,g,b=px[x,y]; a=255-min(r,g,b)  # whiteness -> alpha
    a=max(0,min(255,int((255-(r+g+b)/3)*255/ (255-60)))) 
    pn[x,y]=(30,33,136,a); pw[x,y]=(255,255,255,a)
navy.save(A+'sp_navy.png'); white.save(A+'sp_white.png')
# DeepSpec logo: key white to transparent
im=Image.open(M+'image-1-3.png').convert('RGBA'); d=im.load()
for y in range(im.size[1]):
  for x in range(im.size[0]):
    r,g,b,_=d[x,y]
    if r>245 and g>245 and b>245: d[x,y]=(255,255,255,0)
im.save(A+'ds_logo.png')
def rounded(src,dst,rad):
  im=Image.open(src).convert('RGBA'); m=Image.new('L',im.size,0)
  ImageDraw.Draw(m).rounded_rectangle([0,0,im.size[0]-1,im.size[1]-1],rad,fill=255)
  im.putalpha(m); im.save(dst)
rounded(M+'image-1-2.png',A+'cover_r.png',36)
for i in range(2,6): rounded(M+f'image-2-{i}.jpg',A+f'yt{i-1}.png',28)
rounded(M+'image-6-2.png',A+'shot6.png',22)
