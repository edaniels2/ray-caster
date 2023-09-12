(module
 (type $f64_=>_f64 (func (param f64) (result f64)))
 (type $i32_=>_none (func (param i32)))
 (type $none_=>_none (func))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $f64_f64_i32_=>_f64 (func (param f64 f64 i32) (result f64)))
 (type $i64_=>_i32 (func (param i64) (result i32)))
 (type $i32_i32_=>_f64 (func (param i32 i32) (result f64)))
 (type $f64_f64_f64_f64_f64_=>_f64 (func (param f64 f64 f64 f64 f64) (result f64)))
 (type $f64_f64_i32_=>_none (func (param f64 f64 i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $assembly/index/TILE_TYPES (mut i32) (i32.const 0))
 (global $assembly/index/SPRITES (mut i32) (i32.const 0))
 (global $assembly/index/screenWidth (mut i32) (i32.const 320))
 (global $assembly/index/screenHeight (mut i32) (i32.const 200))
 (global $assembly/index/deltaT (mut f64) (f64.const 0))
 (global $~lib/math/rempio2_y0 (mut f64) (f64.const 0))
 (global $~lib/math/rempio2_y1 (mut f64) (f64.const 0))
 (global $~lib/math/res128_hi (mut i64) (i64.const 0))
 (global $assembly/index/distToPlane (mut f64) (f64.const 0))
 (global $assembly/index/halfHeight (mut i32) (i32.const 0))
 (global $assembly/index/imageBuffer (mut i32) (i32.const 0))
 (global $assembly/index/textures (mut i32) (i32.const 0))
 (global $assembly/index/sprites (mut i32) (i32.const 0))
 (global $assembly/index/mapData (mut i32) (i32.const 0))
 (global $assembly/index/mapSizeX (mut i32) (i32.const 0))
 (global $assembly/index/mapSizeY (mut i32) (i32.const 0))
 (global $assembly/index/wallDistances (mut i32) (i32.const 0))
 (global $assembly/index/beta (mut f64) (f64.const 0))
 (global $assembly/index/theta (mut f64) (f64.const 0))
 (global $assembly/index/camera (mut i32) (i32.const 0))
 (global $assembly/index/wallSlice (mut i32) (i32.const 0))
 (global $assembly/index/Uint8ClampedArray_ID i32 (i32.const 5))
 (global $~lib/rt/__rtti_base i32 (i32.const 2064))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 18548))
 (memory $0 1)
 (data (i32.const 1036) "<")
 (data (i32.const 1048) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1100) "<")
 (data (i32.const 1112) "\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data (i32.const 1228) "<")
 (data (i32.const 1240) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1292) ",")
 (data (i32.const 1304) "\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data (i32.const 1372) "<")
 (data (i32.const 1384) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1440) "n\83\f9\a2\00\00\00\00\d1W\'\fc)\15DN\99\95b\db\c0\dd4\f5\abcQ\feA\90C<:n$\b7a\c5\bb\de\ea.I\06\e0\d2MB\1c\eb\1d\fe\1c\92\d1\t\f55\82\e8>\a7)\b1&p\9c\e9\84D\bb.9\d6\919A~_\b4\8b_\84\9c\f49S\83\ff\97\f8\1f;(\f9\bd\8b\11/\ef\0f\98\05\de\cf~6m\1fm\nZf?FO\b7\t\cb\'\c7\ba\'u-\ea_\9e\f79\07={\f1\e5\eb\b1_\fbk\ea\92R\8aF0\03V\08]\8d\1f \bc\cf\f0\abk{\fca\91\e3\a9\1d6\f4\9a_\85\99e\08\1b\e6^\80\d8\ff\8d@h\a0\14W\15\06\061\'sM")
 (data (i32.const 1644) ",")
 (data (i32.const 1656) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1692) "<")
 (data (i32.const 1704) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 1756) "<")
 (data (i32.const 1768) "\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1820) "<")
 (data (i32.const 1832) "\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t")
 (data (i32.const 1884) ",")
 (data (i32.const 1896) "\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s")
 (data (i32.const 1932) "<")
 (data (i32.const 1944) "\01\00\00\00*\00\00\00O\00b\00j\00e\00c\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00p\00i\00n\00n\00e\00d")
 (data (i32.const 1996) "<")
 (data (i32.const 2008) "\01\00\00\00(\00\00\00O\00b\00j\00e\00c\00t\00 \00i\00s\00 \00n\00o\00t\00 \00p\00i\00n\00n\00e\00d")
 (data (i32.const 2064) "\0c\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 2092) " \00\00\00\00\00\00\00 \00\00\00\00\00\00\00A\00\00\00\02\00\00\00\10\c1\00\00\00\00\00\00\01\1a\00\00\02\00\00\00 ")
 (data (i32.const 2148) " \00\00\00\00\00\00\00 ")
 (export "setSize" (func $assembly/index/setSize))
 (export "drawSliver" (func $assembly/index/drawSliver))
 (export "drawSprite" (func $assembly/index/drawSprite))
 (export "distToWall" (func $assembly/index/distToWall))
 (export "normalizeAngle" (func $assembly/index/normalizeAngle))
 (export "Uint8ClampedArray_ID" (global $assembly/index/Uint8ClampedArray_ID))
 (export "__new" (func $~lib/rt/itcms/__new))
 (export "__pin" (func $~lib/rt/itcms/__pin))
 (export "__unpin" (func $~lib/rt/itcms/__unpin))
 (export "__collect" (func $~lib/rt/itcms/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (export "setMapData" (func $export:assembly/index/setMapData))
 (export "setImageBuffer" (func $export:assembly/index/setImageBuffer))
 (export "setTexture" (func $export:assembly/index/setTexture))
 (export "setSprite" (func $export:assembly/index/setSprite))
 (start $~start)
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  global.get $assembly/index/TILE_TYPES
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/index/SPRITES
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/index/imageBuffer
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/index/textures
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/index/sprites
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/index/mapData
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/index/wallDistances
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/index/camera
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  i32.const 1248
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1664
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1840
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1056
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1952
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 2016
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 0
     i32.const 1120
     i32.const 159
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.const -4
  i32.and
  local.tee $1
  i32.eqz
  if
   i32.const 0
   local.get $0
   i32.const 18548
   i32.lt_u
   local.get $0
   i32.load offset=8
   select
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 127
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   return
  end
  local.get $0
  i32.load offset=8
  local.tee $0
  i32.eqz
  if
   i32.const 0
   i32.const 1120
   i32.const 131
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.store offset=8
  local.get $0
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  local.get $1
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/rt/itcms/iter
  local.get $0
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 147
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  global.get $~lib/rt/itcms/toSpace
  local.set $1
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   i32.const 2064
   i32.load
   local.get $2
   i32.lt_u
   if
    i32.const 1248
    i32.const 1312
    i32.const 22
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   i32.const 3
   i32.shl
   i32.const 2068
   i32.add
   i32.load
   i32.const 32
   i32.and
  end
  local.set $3
  local.get $1
  i32.load offset=8
  local.set $2
  local.get $0
  local.get $1
  global.get $~lib/rt/itcms/white
  i32.eqz
  i32.const 2
  local.get $3
  select
  i32.or
  i32.store offset=4
  local.get $0
  local.get $2
  i32.store offset=8
  local.get $2
  local.get $2
  i32.load offset=4
  i32.const 3
  i32.and
  local.get $0
  i32.or
  i32.store offset=4
  local.get $1
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 268
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.tee $3
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1392
   i32.const 270
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   local.get $3
   i32.const 1073741820
   local.get $3
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 7
   i32.sub
   local.set $2
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $4
  i32.const 16
  i32.lt_u
  local.get $2
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 284
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $3
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $3
   i32.store offset=8
  end
  local.get $3
  if
   local.get $3
   local.get $5
   i32.store offset=4
  end
  local.get $4
  local.get $2
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=96
  local.get $1
  i32.eq
  if
   local.get $4
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   local.get $3
   i32.store offset=96
   local.get $3
   i32.eqz
   if
    local.get $2
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    local.tee $1
    i32.load offset=4
    i32.const -2
    local.get $4
    i32.rotl
    i32.and
    local.set $3
    local.get $1
    local.get $3
    i32.store offset=4
    local.get $3
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $2
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $4
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load
   local.set $2
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $1
   i32.load
   local.tee $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1392
    i32.const 221
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $3
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $3
  i32.const -4
  i32.and
  local.tee $2
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1392
   i32.const 233
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.get $4
  i32.ne
  if
   i32.const 0
   i32.const 1392
   i32.const 234
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $2
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $2
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   local.get $2
   i32.const 1073741820
   local.get $2
   i32.const 1073741820
   i32.lt_u
   select
   local.tee $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 7
   i32.sub
   local.set $5
   local.get $2
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $2
  i32.const 16
  i32.lt_u
  local.get $5
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 251
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=96
  local.set $3
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $3
  i32.store offset=8
  local.get $3
  if
   local.get $3
   local.get $1
   i32.store offset=4
  end
  local.get $2
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $5
  i32.shl
  i32.or
  i32.store
  local.get $5
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $2
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1392
   i32.const 377
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.load offset=1568
  local.tee $3
  if
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1392
    i32.const 384
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $3
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1392
    i32.const 397
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  i32.const -16
  i32.and
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 0
  i32.le_s
  if (result i32)
   i32.const 1
   local.get $0
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 18560
  i32.const 0
  i32.store
  i32.const 20128
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 18560
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 18560
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 18560
  i32.const 20132
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 18560
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      br_table $case0|0 $case1|0 $case2|0 $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $1
    global.get $~lib/rt/itcms/iter
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    loop $while-continue|1
     global.get $~lib/rt/itcms/toSpace
     local.get $0
     i32.ne
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $0
      i32.load offset=4
      i32.const 3
      i32.and
      local.get $1
      i32.ne
      if
       local.get $0
       local.get $1
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       i32.or
       i32.store offset=4
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       return
      end
      local.get $0
      i32.load offset=4
      i32.const -4
      i32.and
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/iter
    i32.load offset=4
    i32.const -4
    i32.and
    i32.eq
    if
     global.get $~lib/memory/__stack_pointer
     local.set $0
     loop $while-continue|0
      local.get $0
      i32.const 18548
      i32.lt_u
      if
       local.get $0
       i32.load
       local.tee $2
       if
        local.get $2
        call $byn-split-outlined-A$~lib/rt/itcms/__visit
       end
       local.get $0
       i32.const 4
       i32.add
       local.set $0
       br $while-continue|0
      end
     end
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|2
      global.get $~lib/rt/itcms/toSpace
      local.get $0
      i32.ne
      if
       local.get $0
       i32.load offset=4
       i32.const 3
       i32.and
       local.get $1
       i32.ne
       if
        local.get $0
        local.get $1
        local.get $0
        i32.load offset=4
        i32.const -4
        i32.and
        i32.or
        i32.store offset=4
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
       end
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $0
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $0
     global.set $~lib/rt/itcms/toSpace
     local.get $1
     global.set $~lib/rt/itcms/white
     local.get $0
     i32.load offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    return
   end
   global.get $~lib/rt/itcms/iter
   local.tee $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    i32.load offset=4
    local.tee $1
    i32.const -4
    i32.and
    global.set $~lib/rt/itcms/iter
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.get $1
    i32.const 3
    i32.and
    i32.ne
    if
     i32.const 0
     i32.const 1120
     i32.const 228
     i32.const 20
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 18548
    i32.lt_u
    if
     local.get $0
     i32.const 0
     i32.store offset=4
     local.get $0
     i32.const 0
     i32.store offset=8
    else
     global.get $~lib/rt/itcms/total
     local.get $0
     i32.load
     i32.const -4
     i32.and
     i32.const 4
     i32.add
     i32.sub
     global.set $~lib/rt/itcms/total
     local.get $0
     i32.const 4
     i32.add
     local.tee $0
     i32.const 18548
     i32.ge_u
     if
      global.get $~lib/rt/tlsf/ROOT
      i32.eqz
      if
       call $~lib/rt/tlsf/initialize
      end
      global.get $~lib/rt/tlsf/ROOT
      local.get $0
      i32.const 4
      i32.sub
      local.set $2
      local.get $0
      i32.const 15
      i32.and
      i32.const 1
      local.get $0
      select
      if (result i32)
       i32.const 1
      else
       local.get $2
       i32.load
       i32.const 1
       i32.and
      end
      if
       i32.const 0
       i32.const 1392
       i32.const 559
       i32.const 3
       call $~lib/builtins/abort
       unreachable
      end
      local.get $2
      local.get $2
      i32.load
      i32.const 1
      i32.or
      i32.store
      local.get $2
      call $~lib/rt/tlsf/insertBlock
     end
    end
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   local.tee $0
   local.get $0
   i32.store offset=4
   local.get $0
   local.get $0
   i32.store offset=8
   i32.const 0
   global.set $~lib/rt/itcms/state
  end
  i32.const 0
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $1
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   local.get $1
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870910
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.tee $3
   i32.const 7
   i32.sub
   local.set $2
   local.get $1
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $1
  i32.const 16
  i32.lt_u
  local.get $2
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1392
   i32.const 330
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1392
     i32.const 343
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 260
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $2
    loop $do-loop|0
     local.get $2
     call $~lib/rt/itcms/step
     i32.sub
     local.set $2
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $2
     i32.const 0
     i32.gt_s
     br_if $do-loop|0
    end
    global.get $~lib/rt/itcms/total
    local.tee $2
    local.get $2
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.set $4
  local.get $0
  i32.const 16
  i32.add
  local.tee $2
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1056
   i32.const 1392
   i32.const 458
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 12
  local.get $2
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $2
  i32.const 12
  i32.le_u
  select
  local.tee $5
  call $~lib/rt/tlsf/searchBlock
  local.tee $2
  i32.eqz
  if
   memory.size
   local.tee $2
   i32.const 4
   local.get $4
   i32.load offset=1568
   local.get $2
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   i32.ne
   i32.shl
   i32.const 1
   i32.const 27
   local.get $5
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   local.get $5
   i32.add
   local.get $5
   local.get $5
   i32.const 536870910
   i32.lt_u
   select
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $3
   local.get $2
   local.get $3
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $4
   local.get $2
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $4
   local.get $5
   call $~lib/rt/tlsf/searchBlock
   local.tee $2
   i32.eqz
   if
    i32.const 0
    i32.const 1392
    i32.const 496
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  i32.load
  i32.const -4
  i32.and
  local.get $5
  i32.lt_u
  if
   i32.const 0
   i32.const 1392
   i32.const 498
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  local.get $2
  call $~lib/rt/tlsf/removeBlock
  local.get $2
  i32.load
  local.set $3
  local.get $5
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1392
   i32.const 357
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $5
  i32.sub
  local.tee $6
  i32.const 16
  i32.ge_u
  if
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   local.get $5
   i32.or
   i32.store
   local.get $5
   local.get $2
   i32.const 4
   i32.add
   i32.add
   local.tee $3
   local.get $6
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $4
   local.get $3
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $2
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $2
   i32.const 4
   i32.add
   local.get $2
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   local.get $3
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  global.get $~lib/rt/itcms/fromSpace
  local.tee $1
  i32.load offset=8
  local.set $3
  local.get $2
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.or
  i32.store offset=4
  local.get $2
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $3
  i32.load offset=4
  i32.const 3
  i32.and
  local.get $2
  i32.or
  i32.store offset=4
  local.get $1
  local.get $2
  i32.store offset=8
  global.get $~lib/rt/itcms/total
  local.get $2
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.set $2
  block $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $2
   i32.const 0
   i32.store8
   local.get $0
   local.get $2
   i32.add
   local.tee $1
   i32.const 1
   i32.sub
   i32.const 0
   i32.store8
   local.get $0
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $2
   i32.const 0
   i32.store8 offset=1
   local.get $2
   i32.const 0
   i32.store8 offset=2
   local.get $1
   i32.const 2
   i32.sub
   i32.const 0
   i32.store8
   local.get $1
   i32.const 3
   i32.sub
   i32.const 0
   i32.store8
   local.get $0
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $2
   i32.const 0
   i32.store8 offset=3
   local.get $1
   i32.const 4
   i32.sub
   i32.const 0
   i32.store8
   local.get $0
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $2
   i32.const 0
   local.get $2
   i32.sub
   i32.const 3
   i32.and
   local.tee $1
   i32.add
   local.tee $3
   i32.const 0
   i32.store
   local.get $3
   local.get $0
   local.get $1
   i32.sub
   i32.const -4
   i32.and
   local.tee $0
   i32.add
   local.tee $1
   i32.const 4
   i32.sub
   i32.const 0
   i32.store
   local.get $0
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $3
   i32.const 0
   i32.store offset=4
   local.get $3
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 12
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 8
   i32.sub
   i32.const 0
   i32.store
   local.get $0
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $3
   i32.const 0
   i32.store offset=12
   local.get $3
   i32.const 0
   i32.store offset=16
   local.get $3
   i32.const 0
   i32.store offset=20
   local.get $3
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 28
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 24
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 20
   i32.sub
   i32.const 0
   i32.store
   local.get $1
   i32.const 16
   i32.sub
   i32.const 0
   i32.store
   local.get $3
   local.get $3
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $4
   i32.add
   local.set $1
   local.get $0
   local.get $4
   i32.sub
   local.set $0
   loop $while-continue|0
    local.get $0
    i32.const 32
    i32.ge_u
    if
     local.get $1
     i64.const 0
     i64.store
     local.get $1
     i64.const 0
     i64.store offset=8
     local.get $1
     i64.const 0
     i64.store offset=16
     local.get $1
     i64.const 0
     i64.store offset=24
     local.get $0
     i32.const 32
     i32.sub
     local.set $0
     local.get $1
     i32.const 32
     i32.add
     local.set $1
     br $while-continue|0
    end
   end
  end
  local.get $2
 )
 (func $~lib/math/tan_kern (param $0 f64) (param $1 f64) (param $2 i32) (result f64)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  local.get $0
  i64.reinterpret_f64
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $3
  i32.const 2147483647
  i32.and
  i32.const 1072010280
  i32.ge_u
  local.tee $4
  if
   f64.const 0.7853981633974483
   local.get $3
   i32.const 0
   i32.lt_s
   if (result f64)
    local.get $1
    f64.neg
    local.set $1
    local.get $0
    f64.neg
   else
    local.get $0
   end
   f64.sub
   f64.const 3.061616997868383e-17
   local.get $1
   f64.sub
   f64.add
   local.set $0
   f64.const 0
   local.set $1
  end
  local.get $0
  local.get $0
  f64.mul
  local.tee $5
  local.get $5
  f64.mul
  local.set $6
  local.get $0
  local.get $1
  local.get $5
  local.get $5
  local.get $0
  f64.mul
  local.tee $7
  local.get $6
  local.get $6
  local.get $6
  local.get $6
  local.get $6
  f64.const -1.8558637485527546e-05
  f64.mul
  f64.const 7.817944429395571e-05
  f64.add
  f64.mul
  f64.const 5.880412408202641e-04
  f64.add
  f64.mul
  f64.const 3.5920791075913124e-03
  f64.add
  f64.mul
  f64.const 0.021869488294859542
  f64.add
  f64.mul
  f64.const 0.13333333333320124
  f64.add
  local.get $5
  local.get $6
  local.get $6
  local.get $6
  local.get $6
  local.get $6
  f64.const 2.590730518636337e-05
  f64.mul
  f64.const 7.140724913826082e-05
  f64.add
  f64.mul
  f64.const 2.464631348184699e-04
  f64.add
  f64.mul
  f64.const 1.4562094543252903e-03
  f64.add
  f64.mul
  f64.const 0.0088632398235993
  f64.add
  f64.mul
  f64.const 0.05396825397622605
  f64.add
  f64.mul
  f64.add
  f64.mul
  local.get $1
  f64.add
  f64.mul
  f64.add
  local.get $7
  f64.const 0.3333333333333341
  f64.mul
  f64.add
  local.tee $1
  f64.add
  local.set $5
  local.get $4
  if
   f64.const 1
   local.get $3
   i32.const 30
   i32.shr_s
   i32.const 2
   i32.and
   f64.convert_i32_s
   f64.sub
   local.get $2
   f64.convert_i32_s
   local.tee $6
   local.get $0
   local.get $5
   local.get $5
   f64.mul
   local.get $5
   local.get $6
   f64.add
   f64.div
   local.get $1
   f64.sub
   f64.sub
   f64.const 2
   f64.mul
   f64.sub
   f64.mul
   return
  end
  local.get $2
  i32.const 1
  i32.eq
  if
   local.get $5
   return
  end
  f64.const -1
  local.get $5
  f64.div
  local.tee $6
  i64.reinterpret_f64
  i64.const -4294967296
  i64.and
  f64.reinterpret_i64
  local.tee $7
  local.get $6
  local.get $7
  local.get $5
  i64.reinterpret_f64
  i64.const -4294967296
  i64.and
  f64.reinterpret_i64
  local.tee $5
  f64.mul
  f64.const 1
  f64.add
  local.get $7
  local.get $1
  local.get $5
  local.get $0
  f64.sub
  f64.sub
  f64.mul
  f64.add
  f64.mul
  f64.add
 )
 (func $~lib/math/pio2_large_quot (param $0 i64) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i64)
  (local $4 i32)
  (local $5 f64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i64)
  (local $10 i64)
  (local $11 i64)
  (local $12 i64)
  local.get $0
  i64.const 9223372036854775807
  i64.and
  i64.const 52
  i64.shr_u
  i64.const 1045
  i64.sub
  local.tee $1
  i64.const 63
  i64.and
  local.set $6
  local.get $1
  i64.const 6
  i64.shr_s
  i32.wrap_i64
  i32.const 3
  i32.shl
  i32.const 1440
  i32.add
  local.tee $4
  i64.load
  local.set $3
  local.get $4
  i64.load offset=8
  local.set $2
  local.get $4
  i64.load offset=16
  local.set $1
  local.get $6
  i64.const 0
  i64.ne
  if
   local.get $3
   local.get $6
   i64.shl
   local.get $2
   i64.const 64
   local.get $6
   i64.sub
   local.tee $7
   i64.shr_u
   i64.or
   local.set $3
   local.get $2
   local.get $6
   i64.shl
   local.get $1
   local.get $7
   i64.shr_u
   i64.or
   local.set $2
   local.get $1
   local.get $6
   i64.shl
   local.get $4
   i64.load offset=24
   local.get $7
   i64.shr_u
   i64.or
   local.set $1
  end
  local.get $0
  i64.const 4503599627370495
  i64.and
  i64.const 4503599627370496
  i64.or
  local.tee $6
  i64.const 4294967295
  i64.and
  local.tee $7
  local.get $2
  i64.const 4294967295
  i64.and
  local.tee $8
  i64.mul
  local.set $9
  local.get $8
  local.get $6
  i64.const 32
  i64.shr_u
  local.tee $8
  i64.mul
  local.get $7
  local.get $2
  i64.const 32
  i64.shr_u
  local.tee $2
  i64.mul
  local.get $9
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $7
  i64.const 4294967295
  i64.and
  i64.add
  local.set $10
  local.get $2
  local.get $8
  i64.mul
  local.get $7
  i64.const 32
  i64.shr_u
  i64.add
  local.get $10
  i64.const 32
  i64.shr_u
  i64.add
  global.set $~lib/math/res128_hi
  local.get $1
  i64.const 32
  i64.shr_u
  local.get $8
  i64.mul
  local.tee $1
  local.get $9
  i64.const 4294967295
  i64.and
  local.get $10
  i64.const 32
  i64.shl
  i64.add
  i64.add
  local.tee $2
  local.get $1
  i64.lt_u
  i64.extend_i32_u
  global.get $~lib/math/res128_hi
  local.get $3
  local.get $6
  i64.mul
  i64.add
  i64.add
  local.tee $3
  i64.const 2
  i64.shl
  local.get $2
  i64.const 62
  i64.shr_u
  i64.or
  local.tee $6
  i64.const 63
  i64.shr_s
  local.tee $7
  i64.const 1
  i64.shr_s
  local.get $6
  i64.xor
  local.tee $1
  i64.clz
  local.set $8
  local.get $1
  local.get $8
  i64.shl
  local.get $7
  local.get $2
  i64.const 2
  i64.shl
  i64.xor
  local.tee $9
  i64.const 64
  local.get $8
  i64.sub
  i64.shr_u
  i64.or
  local.tee $10
  i64.const 4294967295
  i64.and
  local.set $2
  local.get $10
  i64.const 32
  i64.shr_u
  local.tee $1
  i64.const 560513588
  i64.mul
  local.get $2
  i64.const 3373259426
  i64.mul
  local.get $2
  i64.const 560513588
  i64.mul
  local.tee $11
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $2
  i64.const 4294967295
  i64.and
  i64.add
  local.set $12
  local.get $1
  i64.const 3373259426
  i64.mul
  local.get $2
  i64.const 32
  i64.shr_u
  i64.add
  local.get $12
  i64.const 32
  i64.shr_u
  i64.add
  global.set $~lib/math/res128_hi
  local.get $11
  i64.const 4294967295
  i64.and
  local.get $12
  i64.const 32
  i64.shl
  i64.add
  local.tee $1
  local.get $10
  f64.convert_i64_u
  f64.const 3.753184150245214e-04
  f64.mul
  local.get $9
  local.get $8
  i64.shl
  f64.convert_i64_u
  f64.const 3.834951969714103e-04
  f64.mul
  f64.add
  i64.trunc_f64_u
  local.tee $2
  i64.lt_u
  i64.extend_i32_u
  global.get $~lib/math/res128_hi
  local.tee $9
  i64.const 11
  i64.shr_u
  i64.add
  f64.convert_i64_u
  global.set $~lib/math/rempio2_y0
  local.get $2
  local.get $9
  i64.const 53
  i64.shl
  local.get $1
  i64.const 11
  i64.shr_u
  i64.or
  i64.add
  f64.convert_i64_u
  f64.const 5.421010862427522e-20
  f64.mul
  global.set $~lib/math/rempio2_y1
  global.get $~lib/math/rempio2_y0
  i64.const 4372995238176751616
  local.get $8
  i64.const 52
  i64.shl
  i64.sub
  local.get $0
  local.get $6
  i64.xor
  i64.const -9223372036854775808
  i64.and
  i64.or
  f64.reinterpret_i64
  local.tee $5
  f64.mul
  global.set $~lib/math/rempio2_y0
  global.get $~lib/math/rempio2_y1
  local.get $5
  f64.mul
  global.set $~lib/math/rempio2_y1
  local.get $3
  i64.const 62
  i64.shr_s
  local.get $7
  i64.sub
  i32.wrap_i64
 )
 (func $~lib/math/NativeMath.tan (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 i32)
  (local $3 f64)
  (local $4 f64)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i64.reinterpret_f64
  local.tee $5
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $2
  i32.const 31
  i32.shr_u
  local.set $6
  local.get $2
  i32.const 2147483647
  i32.and
  local.tee $2
  i32.const 1072243195
  i32.le_u
  if
   local.get $2
   i32.const 1044381696
   i32.lt_u
   if
    local.get $0
    return
   end
   local.get $0
   f64.const 0
   i32.const 1
   call $~lib/math/tan_kern
   return
  end
  local.get $2
  i32.const 2146435072
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.sub
   return
  end
  block $~lib/math/rempio2|inlined.0
   local.get $5
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const 2147483647
   i32.and
   local.tee $7
   i32.const 1073928572
   i32.lt_u
   if
    i32.const 1
    local.set $2
    local.get $6
    if (result f64)
     local.get $0
     f64.const 1.5707963267341256
     f64.add
     local.set $0
     i32.const -1
     local.set $2
     local.get $7
     i32.const 1073291771
     i32.ne
     if (result f64)
      local.get $0
      local.get $0
      f64.const 6.077100506506192e-11
      f64.add
      local.tee $0
      f64.sub
      f64.const 6.077100506506192e-11
      f64.add
     else
      local.get $0
      f64.const 6.077100506303966e-11
      f64.add
      local.tee $1
      f64.const 2.0222662487959506e-21
      f64.add
      local.set $0
      local.get $1
      local.get $0
      f64.sub
      f64.const 2.0222662487959506e-21
      f64.add
     end
    else
     local.get $0
     f64.const 1.5707963267341256
     f64.sub
     local.set $0
     local.get $7
     i32.const 1073291771
     i32.ne
     if (result f64)
      local.get $0
      local.get $0
      f64.const 6.077100506506192e-11
      f64.sub
      local.tee $0
      f64.sub
      f64.const 6.077100506506192e-11
      f64.sub
     else
      local.get $0
      f64.const 6.077100506303966e-11
      f64.sub
      local.tee $1
      f64.const 2.0222662487959506e-21
      f64.sub
      local.set $0
      local.get $1
      local.get $0
      f64.sub
      f64.const 2.0222662487959506e-21
      f64.sub
     end
    end
    local.get $0
    global.set $~lib/math/rempio2_y0
    global.set $~lib/math/rempio2_y1
    br $~lib/math/rempio2|inlined.0
   end
   local.get $7
   i32.const 1094263291
   i32.lt_u
   if
    local.get $7
    i32.const 20
    i32.shr_u
    local.tee $2
    local.get $0
    local.get $0
    f64.const 0.6366197723675814
    f64.mul
    f64.nearest
    local.tee $4
    f64.const 1.5707963267341256
    f64.mul
    f64.sub
    local.tee $0
    local.get $4
    f64.const 6.077100506506192e-11
    f64.mul
    local.tee $3
    f64.sub
    local.tee $1
    i64.reinterpret_f64
    i64.const 32
    i64.shr_u
    i32.wrap_i64
    i32.const 20
    i32.shr_u
    i32.const 2047
    i32.and
    i32.sub
    i32.const 16
    i32.gt_u
    if
     local.get $4
     f64.const 2.0222662487959506e-21
     f64.mul
     local.get $0
     local.get $0
     local.get $4
     f64.const 6.077100506303966e-11
     f64.mul
     local.tee $1
     f64.sub
     local.tee $0
     f64.sub
     local.get $1
     f64.sub
     f64.sub
     local.set $3
     local.get $2
     local.get $0
     local.get $3
     f64.sub
     local.tee $1
     i64.reinterpret_f64
     i64.const 32
     i64.shr_u
     i32.wrap_i64
     i32.const 20
     i32.shr_u
     i32.const 2047
     i32.and
     i32.sub
     i32.const 49
     i32.gt_u
     if (result f64)
      local.get $4
      f64.const 8.4784276603689e-32
      f64.mul
      local.get $0
      local.get $0
      local.get $4
      f64.const 2.0222662487111665e-21
      f64.mul
      local.tee $1
      f64.sub
      local.tee $0
      f64.sub
      local.get $1
      f64.sub
      f64.sub
      local.set $3
      local.get $0
      local.get $3
      f64.sub
     else
      local.get $1
     end
     local.set $1
    end
    local.get $1
    global.set $~lib/math/rempio2_y0
    local.get $0
    local.get $1
    f64.sub
    local.get $3
    f64.sub
    global.set $~lib/math/rempio2_y1
    local.get $4
    i32.trunc_f64_s
    local.set $2
    br $~lib/math/rempio2|inlined.0
   end
   i32.const 0
   local.get $5
   call $~lib/math/pio2_large_quot
   local.tee $2
   i32.sub
   local.get $2
   local.get $6
   select
   local.set $2
  end
  global.get $~lib/math/rempio2_y0
  global.get $~lib/math/rempio2_y1
  i32.const 1
  local.get $2
  i32.const 1
  i32.and
  i32.const 1
  i32.shl
  i32.sub
  call $~lib/math/tan_kern
 )
 (func $start:assembly/index
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i64.const 0
   i64.store
   local.get $0
   i32.const 0
   i32.store offset=8
   memory.size
   i32.const 16
   i32.shl
   i32.const 18548
   i32.sub
   i32.const 1
   i32.shr_u
   global.set $~lib/rt/itcms/threshold
   i32.const 1172
   i32.const 1168
   i32.store
   i32.const 1176
   i32.const 1168
   i32.store
   i32.const 1168
   global.set $~lib/rt/itcms/pinSpace
   i32.const 1204
   i32.const 1200
   i32.store
   i32.const 1208
   i32.const 1200
   i32.store
   i32.const 1200
   global.set $~lib/rt/itcms/toSpace
   i32.const 1348
   i32.const 1344
   i32.store
   i32.const 1352
   i32.const 1344
   i32.store
   i32.const 1344
   global.set $~lib/rt/itcms/fromSpace
   local.get $0
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 4
   i32.const 3
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.store8
   local.get $1
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 0
   i32.store8 offset=2
   local.get $1
   i32.const 0
   i32.store8 offset=3
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   local.get $1
   i32.store
   local.get $1
   i32.const 1
   i32.store8
   local.get $1
   i32.const 2
   i32.store8 offset=1
   local.get $1
   i32.const 4
   i32.store8 offset=2
   local.get $1
   i32.const 8
   i32.store8 offset=3
   local.get $1
   global.set $assembly/index/TILE_TYPES
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 3
   i32.const 4
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.store8
   local.get $1
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 0
   i32.store8 offset=2
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   i32.const 1
   i32.store8
   local.get $1
   i32.const 2
   i32.store8 offset=1
   local.get $1
   i32.const 3
   i32.store8 offset=2
   local.get $1
   global.set $assembly/index/SPRITES
   f64.const 1.0471975511965976
   global.get $assembly/index/screenWidth
   local.tee $0
   f64.convert_i32_u
   f64.div
   global.set $assembly/index/deltaT
   local.get $0
   i32.const 1
   i32.shr_u
   f64.convert_i32_u
   f64.const 0.5235987755982988
   call $~lib/math/NativeMath.tan
   f64.div
   global.set $assembly/index/distToPlane
   global.get $assembly/index/screenHeight
   i32.const 1
   i32.shr_u
   global.set $assembly/index/halfHeight
   call $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#constructor
   global.set $assembly/index/textures
   call $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#constructor
   global.set $assembly/index/sprites
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $assembly/index/screenWidth
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   i32.const 12
   i32.const 7
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 8
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   local.get $0
   i32.eqz
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.const 2
    call $~lib/rt/itcms/__new
    local.tee $0
    i32.store
   end
   local.get $0
   i32.const 0
   i32.store
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $2
   i32.const 134217727
   i32.gt_u
   if
    i32.const 1664
    i32.const 1712
    i32.const 19
    i32.const 57
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.const 3
   i32.shl
   local.tee $3
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store offset=4
   local.get $0
   local.get $2
   i32.store
   local.get $2
   if
    local.get $0
    local.get $2
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   local.get $0
   local.get $2
   i32.store offset=4
   local.get $0
   local.get $3
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   global.set $assembly/index/wallDistances
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 32
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   local.get $1
   f64.const 0
   f64.store
   local.get $1
   f64.const 0
   f64.store offset=8
   local.get $1
   f64.const 0
   f64.store offset=16
   local.get $1
   f64.const 0
   f64.store offset=24
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   local.get $1
   f64.const 0
   f64.store
   local.get $1
   f64.const 0
   f64.store offset=8
   local.get $1
   f64.const 0
   f64.store offset=16
   local.get $1
   f64.const 0
   f64.store offset=24
   local.get $1
   global.set $assembly/index/camera
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 18576
  i32.const 18624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/index/setSize (param $0 i32) (param $1 i32)
  local.get $0
  global.set $assembly/index/screenWidth
  local.get $1
  global.set $assembly/index/screenHeight
  f64.const 1.0471975511965976
  global.get $assembly/index/screenWidth
  local.tee $0
  f64.convert_i32_u
  f64.div
  global.set $assembly/index/deltaT
  local.get $0
  i32.const 1
  i32.shr_u
  f64.convert_i32_u
  f64.const 0.5235987755982988
  call $~lib/math/NativeMath.tan
  f64.div
  global.set $assembly/index/distToPlane
  global.get $assembly/index/screenHeight
  i32.const 1
  i32.shr_u
  global.set $assembly/index/halfHeight
 )
 (func $assembly/index/normalizeAngle (param $0 f64) (result f64)
  loop $while-continue|0
   local.get $0
   f64.const 0
   f64.lt
   if
    local.get $0
    f64.const 6.283185307179586
    f64.add
    local.set $0
    br $while-continue|0
   end
  end
  loop $while-continue|1
   local.get $0
   f64.const 6.283185307179586
   f64.gt
   if
    local.get $0
    f64.const 6.283185307179586
    f64.sub
    local.set $0
    br $while-continue|1
   end
  end
  local.get $0
 )
 (func $~lib/typedarray/Uint8ClampedArray#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=8
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1776
   i32.const 307
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=4
  i32.add
  i32.load8_u
 )
 (func $~lib/math/NativeMath.mod (param $0 f64) (result f64)
  (local $1 i64)
  (local $2 i64)
  (local $3 i64)
  (local $4 i64)
  local.get $0
  i64.reinterpret_f64
  local.tee $2
  i64.const 52
  i64.shr_u
  i64.const 2047
  i64.and
  local.tee $4
  i64.const 2047
  i64.eq
  if
   local.get $0
   f64.const 64
   f64.mul
   local.tee $0
   local.get $0
   f64.div
   return
  end
  local.get $2
  i64.const 1
  i64.shl
  local.tee $1
  i64.const -9178336040581070848
  i64.le_u
  if
   local.get $0
   local.get $1
   i64.const -9178336040581070848
   i64.ne
   f64.convert_i32_u
   f64.mul
   return
  end
  local.get $2
  i64.const 63
  i64.shr_u
  local.get $4
  i64.eqz
  if (result i64)
   local.get $2
   i64.const 1
   local.get $4
   local.get $2
   i64.const 12
   i64.shl
   i64.clz
   i64.sub
   local.tee $4
   i64.sub
   i64.shl
  else
   local.get $2
   i64.const 4503599627370495
   i64.and
   i64.const 4503599627370496
   i64.or
  end
  local.set $1
  loop $while-continue|0
   local.get $4
   i64.const 1029
   i64.gt_s
   if
    local.get $1
    i64.const 4503599627370496
    i64.ge_u
    if (result i64)
     local.get $1
     i64.const 4503599627370496
     i64.eq
     if
      local.get $0
      f64.const 0
      f64.mul
      return
     end
     local.get $1
     i64.const 4503599627370496
     i64.sub
    else
     local.get $1
    end
    i64.const 1
    i64.shl
    local.set $1
    local.get $4
    i64.const 1
    i64.sub
    local.set $4
    br $while-continue|0
   end
  end
  local.get $1
  i64.const 4503599627370496
  i64.ge_u
  if
   local.get $1
   i64.const 4503599627370496
   i64.eq
   if
    local.get $0
    f64.const 0
    f64.mul
    return
   end
   local.get $1
   i64.const 4503599627370496
   i64.sub
   local.set $1
  end
  local.get $4
  local.get $1
  i64.const 11
  i64.shl
  i64.clz
  local.tee $2
  i64.sub
  local.set $4
  i64.const 63
  i64.shl
  local.get $1
  local.get $2
  i64.shl
  local.tee $1
  i64.const 4503599627370496
  i64.sub
  local.get $4
  i64.const 52
  i64.shl
  i64.or
  local.get $1
  i64.const 1
  local.get $4
  i64.sub
  i64.shr_u
  local.get $4
  i64.const 0
  i64.gt_s
  select
  i64.or
  f64.reinterpret_i64
 )
 (func $~lib/math/NativeMath.cos (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 f64)
  (local $8 f64)
  (local $9 f64)
  local.get $0
  i64.reinterpret_f64
  local.tee $4
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $3
  i32.const 31
  i32.shr_u
  local.set $5
  local.get $3
  i32.const 2147483647
  i32.and
  local.tee $3
  i32.const 1072243195
  i32.le_u
  if
   local.get $3
   i32.const 1044816030
   i32.lt_u
   if
    f64.const 1
    return
   end
   local.get $0
   local.get $0
   f64.mul
   local.tee $1
   local.get $1
   f64.mul
   local.set $2
   f64.const 1
   local.get $1
   f64.const 0.5
   f64.mul
   local.tee $7
   f64.sub
   local.tee $8
   f64.const 1
   local.get $8
   f64.sub
   local.get $7
   f64.sub
   local.get $1
   local.get $1
   local.get $1
   local.get $1
   f64.const 2.480158728947673e-05
   f64.mul
   f64.const -0.001388888888887411
   f64.add
   f64.mul
   f64.const 0.0416666666666666
   f64.add
   f64.mul
   local.get $2
   local.get $2
   f64.mul
   local.get $1
   local.get $1
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.const 2.087572321298175e-09
   f64.add
   f64.mul
   f64.const -2.7557314351390663e-07
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $0
   f64.const 0
   f64.mul
   f64.sub
   f64.add
   f64.add
   return
  end
  local.get $3
  i32.const 2146435072
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.sub
   return
  end
  block $~lib/math/rempio2|inlined.1
   local.get $4
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const 2147483647
   i32.and
   local.tee $6
   i32.const 1073928572
   i32.lt_u
   if
    i32.const 1
    local.set $3
    local.get $5
    if (result f64)
     local.get $0
     f64.const 1.5707963267341256
     f64.add
     local.set $0
     i32.const -1
     local.set $3
     local.get $6
     i32.const 1073291771
     i32.ne
     if (result f64)
      local.get $0
      local.get $0
      f64.const 6.077100506506192e-11
      f64.add
      local.tee $0
      f64.sub
      f64.const 6.077100506506192e-11
      f64.add
     else
      local.get $0
      f64.const 6.077100506303966e-11
      f64.add
      local.tee $1
      f64.const 2.0222662487959506e-21
      f64.add
      local.set $0
      local.get $1
      local.get $0
      f64.sub
      f64.const 2.0222662487959506e-21
      f64.add
     end
    else
     local.get $0
     f64.const 1.5707963267341256
     f64.sub
     local.set $0
     local.get $6
     i32.const 1073291771
     i32.ne
     if (result f64)
      local.get $0
      local.get $0
      f64.const 6.077100506506192e-11
      f64.sub
      local.tee $0
      f64.sub
      f64.const 6.077100506506192e-11
      f64.sub
     else
      local.get $0
      f64.const 6.077100506303966e-11
      f64.sub
      local.tee $1
      f64.const 2.0222662487959506e-21
      f64.sub
      local.set $0
      local.get $1
      local.get $0
      f64.sub
      f64.const 2.0222662487959506e-21
      f64.sub
     end
    end
    local.get $0
    global.set $~lib/math/rempio2_y0
    global.set $~lib/math/rempio2_y1
    br $~lib/math/rempio2|inlined.1
   end
   local.get $6
   i32.const 1094263291
   i32.lt_u
   if
    local.get $6
    i32.const 20
    i32.shr_u
    local.tee $3
    local.get $0
    local.get $0
    f64.const 0.6366197723675814
    f64.mul
    f64.nearest
    local.tee $7
    f64.const 1.5707963267341256
    f64.mul
    f64.sub
    local.tee $0
    local.get $7
    f64.const 6.077100506506192e-11
    f64.mul
    local.tee $2
    f64.sub
    local.tee $1
    i64.reinterpret_f64
    i64.const 32
    i64.shr_u
    i32.wrap_i64
    i32.const 20
    i32.shr_u
    i32.const 2047
    i32.and
    i32.sub
    i32.const 16
    i32.gt_u
    if
     local.get $7
     f64.const 2.0222662487959506e-21
     f64.mul
     local.get $0
     local.get $0
     local.get $7
     f64.const 6.077100506303966e-11
     f64.mul
     local.tee $1
     f64.sub
     local.tee $0
     f64.sub
     local.get $1
     f64.sub
     f64.sub
     local.set $2
     local.get $3
     local.get $0
     local.get $2
     f64.sub
     local.tee $1
     i64.reinterpret_f64
     i64.const 32
     i64.shr_u
     i32.wrap_i64
     i32.const 20
     i32.shr_u
     i32.const 2047
     i32.and
     i32.sub
     i32.const 49
     i32.gt_u
     if (result f64)
      local.get $7
      f64.const 8.4784276603689e-32
      f64.mul
      local.get $0
      local.get $0
      local.get $7
      f64.const 2.0222662487111665e-21
      f64.mul
      local.tee $1
      f64.sub
      local.tee $0
      f64.sub
      local.get $1
      f64.sub
      f64.sub
      local.set $2
      local.get $0
      local.get $2
      f64.sub
     else
      local.get $1
     end
     local.set $1
    end
    local.get $1
    global.set $~lib/math/rempio2_y0
    local.get $0
    local.get $1
    f64.sub
    local.get $2
    f64.sub
    global.set $~lib/math/rempio2_y1
    local.get $7
    i32.trunc_f64_s
    local.set $3
    br $~lib/math/rempio2|inlined.1
   end
   i32.const 0
   local.get $4
   call $~lib/math/pio2_large_quot
   local.tee $3
   i32.sub
   local.get $3
   local.get $5
   select
   local.set $3
  end
  global.get $~lib/math/rempio2_y0
  local.set $1
  global.get $~lib/math/rempio2_y1
  local.set $2
  local.get $3
  i32.const 1
  i32.and
  if (result f64)
   local.get $1
   local.get $1
   f64.mul
   local.tee $0
   local.get $1
   f64.mul
   local.set $7
   local.get $1
   local.get $0
   local.get $2
   f64.const 0.5
   f64.mul
   local.get $7
   local.get $0
   local.get $0
   f64.const 2.7557313707070068e-06
   f64.mul
   f64.const -1.984126982985795e-04
   f64.add
   f64.mul
   f64.const 0.00833333333332249
   f64.add
   local.get $0
   local.get $0
   local.get $0
   f64.mul
   f64.mul
   local.get $0
   f64.const 1.58969099521155e-10
   f64.mul
   f64.const -2.5050760253406863e-08
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.sub
   f64.mul
   local.get $2
   f64.sub
   local.get $7
   f64.const -0.16666666666666632
   f64.mul
   f64.sub
   f64.sub
  else
   local.get $1
   local.get $1
   f64.mul
   local.tee $7
   local.get $7
   f64.mul
   local.set $8
   f64.const 1
   local.get $7
   f64.const 0.5
   f64.mul
   local.tee $0
   f64.sub
   local.tee $9
   f64.const 1
   local.get $9
   f64.sub
   local.get $0
   f64.sub
   local.get $7
   local.get $7
   local.get $7
   local.get $7
   f64.const 2.480158728947673e-05
   f64.mul
   f64.const -0.001388888888887411
   f64.add
   f64.mul
   f64.const 0.0416666666666666
   f64.add
   f64.mul
   local.get $8
   local.get $8
   f64.mul
   local.get $7
   local.get $7
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.const 2.087572321298175e-09
   f64.add
   f64.mul
   f64.const -2.7557314351390663e-07
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $1
   local.get $2
   f64.mul
   f64.sub
   f64.add
   f64.add
  end
  local.tee $0
  f64.neg
  local.get $0
  local.get $3
  i32.const 1
  i32.add
  i32.const 2
  i32.and
  select
 )
 (func $assembly/index/distToWall (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  (local $6 i32)
  f64.const 0.5235987755982988
  local.get $0
  global.get $assembly/index/deltaT
  f64.mul
  f64.sub
  global.set $assembly/index/beta
  global.get $assembly/index/camera
  f64.load offset=16
  global.get $assembly/index/beta
  f64.add
  local.set $0
  loop $while-continue|0
   local.get $0
   f64.const 0
   f64.lt
   if
    local.get $0
    f64.const 6.283185307179586
    f64.add
    local.set $0
    br $while-continue|0
   end
  end
  loop $while-continue|1
   local.get $0
   f64.const 6.283185307179586
   f64.gt
   if
    local.get $0
    f64.const 6.283185307179586
    f64.sub
    local.set $0
    br $while-continue|1
   end
  end
  local.get $0
  global.set $assembly/index/theta
  block $folding-inner1
   global.get $assembly/index/theta
   f64.const 1.5707963267948966
   f64.lt
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 16
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2164
    i32.lt_s
    br_if $folding-inner1
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    i64.const 0
    i64.store
    local.get $2
    i64.const 0
    i64.store offset=8
    global.get $assembly/index/theta
    call $~lib/math/NativeMath.tan
    local.set $1
    global.get $assembly/index/camera
    local.tee $2
    f64.load offset=8
    f64.const 0.015625
    f64.mul
    f64.floor
    f64.const 64
    f64.mul
    f64.const 1
    f64.sub
    local.set $5
    local.get $2
    f64.load
    f64.const 0.015625
    f64.mul
    f64.ceil
    f64.const 64
    f64.mul
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.set $4
    global.get $~lib/memory/__stack_pointer
    call $assembly/index/WallData#constructor
    local.tee $3
    i32.store
    global.get $~lib/memory/__stack_pointer
    call $assembly/index/HitData#constructor
    local.tee $2
    i32.store offset=4
    local.get $2
    f64.const 64
    local.get $1
    f64.div
    f64.store
    local.get $2
    f64.const -64
    f64.store offset=8
    local.get $2
    local.get $5
    f64.store offset=16
    local.get $2
    global.get $assembly/index/camera
    f64.load
    global.get $assembly/index/camera
    f64.load offset=8
    local.get $5
    f64.sub
    local.get $1
    f64.div
    f64.add
    f64.store offset=24
    local.get $3
    local.get $2
    i32.store
    local.get $2
    if
     local.get $3
     local.get $2
     i32.const 0
     call $byn-split-outlined-A$~lib/rt/itcms/__link
    end
    global.get $~lib/memory/__stack_pointer
    call $assembly/index/HitData#constructor
    local.tee $2
    i32.store offset=8
    local.get $2
    f64.const 64
    f64.store
    local.get $2
    local.get $1
    f64.const -64
    f64.mul
    f64.store offset=8
    local.get $2
    global.get $assembly/index/camera
    local.tee $6
    f64.load offset=8
    local.get $6
    f64.load
    local.get $0
    f64.sub
    local.get $1
    f64.mul
    f64.add
    f64.store offset=16
   else
    global.get $assembly/index/theta
    f64.const 3.141592653589793
    f64.lt
    if
     global.get $~lib/memory/__stack_pointer
     i32.const 16
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2164
     i32.lt_s
     br_if $folding-inner1
     global.get $~lib/memory/__stack_pointer
     local.tee $2
     i64.const 0
     i64.store
     local.get $2
     i64.const 0
     i64.store offset=8
     global.get $assembly/index/theta
     f64.const 1.5707963267948966
     f64.sub
     call $~lib/math/NativeMath.tan
     local.set $1
     global.get $assembly/index/camera
     local.tee $2
     f64.load offset=8
     f64.const 0.015625
     f64.mul
     f64.floor
     f64.const 64
     f64.mul
     f64.const 1
     f64.sub
     local.set $5
     local.get $2
     f64.load
     f64.const 0.015625
     f64.mul
     f64.floor
     f64.const 64
     f64.mul
     f64.const 1
     f64.sub
     local.set $0
     global.get $~lib/memory/__stack_pointer
     local.set $4
     global.get $~lib/memory/__stack_pointer
     call $assembly/index/WallData#constructor
     local.tee $3
     i32.store
     global.get $~lib/memory/__stack_pointer
     call $assembly/index/HitData#constructor
     local.tee $2
     i32.store offset=4
     local.get $2
     local.get $1
     f64.const -64
     f64.mul
     f64.store
     local.get $2
     f64.const -64
     f64.store offset=8
     local.get $2
     local.get $5
     f64.store offset=16
     local.get $2
     global.get $assembly/index/camera
     f64.load
     global.get $assembly/index/camera
     f64.load offset=8
     local.get $5
     f64.sub
     local.get $1
     f64.mul
     f64.sub
     f64.store offset=24
     local.get $3
     local.get $2
     i32.store
     local.get $2
     if
      local.get $3
      local.get $2
      i32.const 0
      call $byn-split-outlined-A$~lib/rt/itcms/__link
     end
     global.get $~lib/memory/__stack_pointer
     call $assembly/index/HitData#constructor
     local.tee $2
     i32.store offset=8
     local.get $2
     f64.const -64
     f64.store
     local.get $2
     f64.const -64
     local.get $1
     f64.div
     f64.store offset=8
     local.get $2
     global.get $assembly/index/camera
     local.tee $6
     f64.load offset=8
     local.get $6
     f64.load
     local.get $0
     f64.sub
     local.get $1
     f64.div
     f64.sub
     f64.store offset=16
    else
     global.get $assembly/index/theta
     f64.const 4.71238898038469
     f64.lt
     if
      global.get $~lib/memory/__stack_pointer
      i32.const 16
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 2164
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i64.const 0
      i64.store offset=8
      global.get $assembly/index/theta
      f64.const 3.141592653589793
      f64.sub
      call $~lib/math/NativeMath.tan
      local.set $1
      global.get $assembly/index/camera
      local.tee $2
      f64.load offset=8
      f64.const 0.015625
      f64.mul
      f64.ceil
      f64.const 64
      f64.mul
      local.set $5
      local.get $2
      f64.load
      f64.const 0.015625
      f64.mul
      f64.floor
      f64.const 64
      f64.mul
      f64.const 1
      f64.sub
      local.set $0
      global.get $~lib/memory/__stack_pointer
      local.set $4
      global.get $~lib/memory/__stack_pointer
      call $assembly/index/WallData#constructor
      local.tee $3
      i32.store
      global.get $~lib/memory/__stack_pointer
      call $assembly/index/HitData#constructor
      local.tee $2
      i32.store offset=4
      local.get $2
      f64.const -64
      local.get $1
      f64.div
      f64.store
      local.get $2
      f64.const 64
      f64.store offset=8
      local.get $2
      local.get $5
      f64.store offset=16
      local.get $2
      global.get $assembly/index/camera
      f64.load
      local.get $5
      global.get $assembly/index/camera
      f64.load offset=8
      f64.sub
      local.get $1
      f64.div
      f64.sub
      f64.store offset=24
      local.get $3
      local.get $2
      i32.store
      local.get $2
      if
       local.get $3
       local.get $2
       i32.const 0
       call $byn-split-outlined-A$~lib/rt/itcms/__link
      end
      global.get $~lib/memory/__stack_pointer
      call $assembly/index/HitData#constructor
      local.tee $2
      i32.store offset=8
      local.get $2
      f64.const -64
      f64.store
      local.get $2
      local.get $1
      f64.const 64
      f64.mul
      f64.store offset=8
      local.get $2
      global.get $assembly/index/camera
      local.tee $6
      f64.load offset=8
      local.get $6
      f64.load
      local.get $0
      f64.sub
      local.get $1
      f64.mul
      f64.add
      f64.store offset=16
     else
      global.get $~lib/memory/__stack_pointer
      i32.const 16
      i32.sub
      global.set $~lib/memory/__stack_pointer
      global.get $~lib/memory/__stack_pointer
      i32.const 2164
      i32.lt_s
      br_if $folding-inner1
      global.get $~lib/memory/__stack_pointer
      local.tee $2
      i64.const 0
      i64.store
      local.get $2
      i64.const 0
      i64.store offset=8
      global.get $assembly/index/theta
      f64.const 4.71238898038469
      f64.sub
      call $~lib/math/NativeMath.tan
      local.set $1
      global.get $assembly/index/camera
      local.tee $2
      f64.load offset=8
      f64.const 0.015625
      f64.mul
      f64.ceil
      f64.const 64
      f64.mul
      local.set $5
      local.get $2
      f64.load
      f64.const 0.015625
      f64.mul
      f64.ceil
      f64.const 64
      f64.mul
      local.set $0
      global.get $~lib/memory/__stack_pointer
      local.set $4
      global.get $~lib/memory/__stack_pointer
      call $assembly/index/WallData#constructor
      local.tee $3
      i32.store
      global.get $~lib/memory/__stack_pointer
      call $assembly/index/HitData#constructor
      local.tee $2
      i32.store offset=4
      local.get $2
      local.get $1
      f64.const 64
      f64.mul
      f64.store
      local.get $2
      f64.const 64
      f64.store offset=8
      local.get $2
      local.get $5
      f64.store offset=16
      local.get $2
      global.get $assembly/index/camera
      f64.load
      local.get $5
      global.get $assembly/index/camera
      f64.load offset=8
      f64.sub
      local.get $1
      f64.mul
      f64.add
      f64.store offset=24
      local.get $3
      local.get $2
      i32.store
      local.get $2
      if
       local.get $3
       local.get $2
       i32.const 0
       call $byn-split-outlined-A$~lib/rt/itcms/__link
      end
      global.get $~lib/memory/__stack_pointer
      call $assembly/index/HitData#constructor
      local.tee $2
      i32.store offset=8
      local.get $2
      f64.const 64
      f64.store
      local.get $2
      f64.const 64
      local.get $1
      f64.div
      f64.store offset=8
      local.get $2
      global.get $assembly/index/camera
      local.tee $6
      f64.load offset=8
      local.get $0
      local.get $6
      f64.load
      f64.sub
      local.get $1
      f64.div
      f64.add
      f64.store offset=16
     end
    end
   end
   local.get $2
   local.get $0
   f64.store offset=24
   local.get $3
   local.get $2
   i32.store offset=4
   local.get $2
   if
    local.get $3
    local.get $2
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   local.get $4
   local.get $3
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   i64.const 0
   i64.store
   local.get $2
   i32.const 0
   i32.store offset=8
   local.get $2
   local.get $3
   i32.load
   local.tee $4
   i32.store
   local.get $2
   local.get $4
   i32.const 1
   call $assembly/index/hitData
   local.tee $2
   i32.store offset=4
   local.get $2
   i32.load8_u
   local.set $4
   local.get $2
   f64.load offset=8
   local.set $0
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.load offset=4
   local.tee $2
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.const 0
   call $assembly/index/hitData
   local.tee $2
   i32.store offset=8
   local.get $2
   i32.load8_u
   local.set $3
   local.get $0
   local.get $2
   f64.load offset=8
   local.tee $1
   f64.lt
   if
    local.get $4
    global.set $assembly/index/wallSlice
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
   else
    local.get $3
    global.set $assembly/index/wallSlice
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $1
    local.set $0
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   f64.const 1e5
   local.get $0
   local.get $0
   f64.const 1e5
   f64.gt
   select
   global.get $assembly/index/camera
   f64.load offset=16
   global.get $assembly/index/theta
   f64.sub
   local.set $0
   loop $while-continue|02
    local.get $0
    f64.const 0
    f64.lt
    if
     local.get $0
     f64.const 6.283185307179586
     f64.add
     local.set $0
     br $while-continue|02
    end
   end
   loop $while-continue|14
    local.get $0
    f64.const 6.283185307179586
    f64.gt
    if
     local.get $0
     f64.const 6.283185307179586
     f64.sub
     local.set $0
     br $while-continue|14
    end
   end
   local.get $0
   call $~lib/math/NativeMath.cos
   f64.mul
   return
  end
  i32.const 18576
  i32.const 18624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/math/NativeMath.sin (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 f64)
  (local $8 f64)
  (local $9 f64)
  local.get $0
  i64.reinterpret_f64
  local.tee $4
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $3
  i32.const 31
  i32.shr_u
  local.set $5
  local.get $3
  i32.const 2147483647
  i32.and
  local.tee $3
  i32.const 1072243195
  i32.le_u
  if
   local.get $3
   i32.const 1045430272
   i32.lt_u
   if
    local.get $0
    return
   end
   local.get $0
   local.get $0
   local.get $0
   f64.mul
   local.tee $1
   local.get $0
   f64.mul
   local.get $1
   local.get $1
   local.get $1
   f64.const 2.7557313707070068e-06
   f64.mul
   f64.const -1.984126982985795e-04
   f64.add
   f64.mul
   f64.const 0.00833333333332249
   f64.add
   local.get $1
   local.get $1
   local.get $1
   f64.mul
   f64.mul
   local.get $1
   f64.const 1.58969099521155e-10
   f64.mul
   f64.const -2.5050760253406863e-08
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.const -0.16666666666666632
   f64.add
   f64.mul
   f64.add
   return
  end
  local.get $3
  i32.const 2146435072
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.sub
   return
  end
  block $~lib/math/rempio2|inlined.2
   local.get $4
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const 2147483647
   i32.and
   local.tee $6
   i32.const 1073928572
   i32.lt_u
   if
    i32.const 1
    local.set $3
    local.get $5
    if (result f64)
     local.get $0
     f64.const 1.5707963267341256
     f64.add
     local.set $0
     i32.const -1
     local.set $3
     local.get $6
     i32.const 1073291771
     i32.ne
     if (result f64)
      local.get $0
      local.get $0
      f64.const 6.077100506506192e-11
      f64.add
      local.tee $0
      f64.sub
      f64.const 6.077100506506192e-11
      f64.add
     else
      local.get $0
      f64.const 6.077100506303966e-11
      f64.add
      local.tee $1
      f64.const 2.0222662487959506e-21
      f64.add
      local.set $0
      local.get $1
      local.get $0
      f64.sub
      f64.const 2.0222662487959506e-21
      f64.add
     end
    else
     local.get $0
     f64.const 1.5707963267341256
     f64.sub
     local.set $0
     local.get $6
     i32.const 1073291771
     i32.ne
     if (result f64)
      local.get $0
      local.get $0
      f64.const 6.077100506506192e-11
      f64.sub
      local.tee $0
      f64.sub
      f64.const 6.077100506506192e-11
      f64.sub
     else
      local.get $0
      f64.const 6.077100506303966e-11
      f64.sub
      local.tee $1
      f64.const 2.0222662487959506e-21
      f64.sub
      local.set $0
      local.get $1
      local.get $0
      f64.sub
      f64.const 2.0222662487959506e-21
      f64.sub
     end
    end
    local.get $0
    global.set $~lib/math/rempio2_y0
    global.set $~lib/math/rempio2_y1
    br $~lib/math/rempio2|inlined.2
   end
   local.get $6
   i32.const 1094263291
   i32.lt_u
   if
    local.get $6
    i32.const 20
    i32.shr_u
    local.tee $3
    local.get $0
    local.get $0
    f64.const 0.6366197723675814
    f64.mul
    f64.nearest
    local.tee $7
    f64.const 1.5707963267341256
    f64.mul
    f64.sub
    local.tee $0
    local.get $7
    f64.const 6.077100506506192e-11
    f64.mul
    local.tee $2
    f64.sub
    local.tee $1
    i64.reinterpret_f64
    i64.const 32
    i64.shr_u
    i32.wrap_i64
    i32.const 20
    i32.shr_u
    i32.const 2047
    i32.and
    i32.sub
    i32.const 16
    i32.gt_u
    if
     local.get $7
     f64.const 2.0222662487959506e-21
     f64.mul
     local.get $0
     local.get $0
     local.get $7
     f64.const 6.077100506303966e-11
     f64.mul
     local.tee $1
     f64.sub
     local.tee $0
     f64.sub
     local.get $1
     f64.sub
     f64.sub
     local.set $2
     local.get $3
     local.get $0
     local.get $2
     f64.sub
     local.tee $1
     i64.reinterpret_f64
     i64.const 32
     i64.shr_u
     i32.wrap_i64
     i32.const 20
     i32.shr_u
     i32.const 2047
     i32.and
     i32.sub
     i32.const 49
     i32.gt_u
     if (result f64)
      local.get $7
      f64.const 8.4784276603689e-32
      f64.mul
      local.get $0
      local.get $0
      local.get $7
      f64.const 2.0222662487111665e-21
      f64.mul
      local.tee $1
      f64.sub
      local.tee $0
      f64.sub
      local.get $1
      f64.sub
      f64.sub
      local.set $2
      local.get $0
      local.get $2
      f64.sub
     else
      local.get $1
     end
     local.set $1
    end
    local.get $1
    global.set $~lib/math/rempio2_y0
    local.get $0
    local.get $1
    f64.sub
    local.get $2
    f64.sub
    global.set $~lib/math/rempio2_y1
    local.get $7
    i32.trunc_f64_s
    local.set $3
    br $~lib/math/rempio2|inlined.2
   end
   i32.const 0
   local.get $4
   call $~lib/math/pio2_large_quot
   local.tee $3
   i32.sub
   local.get $3
   local.get $5
   select
   local.set $3
  end
  global.get $~lib/math/rempio2_y0
  local.set $2
  global.get $~lib/math/rempio2_y1
  local.set $7
  local.get $3
  i32.const 1
  i32.and
  if (result f64)
   local.get $2
   local.get $2
   f64.mul
   local.tee $0
   local.get $0
   f64.mul
   local.set $1
   f64.const 1
   local.get $0
   f64.const 0.5
   f64.mul
   local.tee $8
   f64.sub
   local.tee $9
   f64.const 1
   local.get $9
   f64.sub
   local.get $8
   f64.sub
   local.get $0
   local.get $0
   local.get $0
   local.get $0
   f64.const 2.480158728947673e-05
   f64.mul
   f64.const -0.001388888888887411
   f64.add
   f64.mul
   f64.const 0.0416666666666666
   f64.add
   f64.mul
   local.get $1
   local.get $1
   f64.mul
   local.get $0
   local.get $0
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.const 2.087572321298175e-09
   f64.add
   f64.mul
   f64.const -2.7557314351390663e-07
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $2
   local.get $7
   f64.mul
   f64.sub
   f64.add
   f64.add
  else
   local.get $2
   local.get $2
   f64.mul
   local.tee $0
   local.get $2
   f64.mul
   local.set $1
   local.get $2
   local.get $0
   local.get $7
   f64.const 0.5
   f64.mul
   local.get $1
   local.get $0
   local.get $0
   f64.const 2.7557313707070068e-06
   f64.mul
   f64.const -1.984126982985795e-04
   f64.add
   f64.mul
   f64.const 0.00833333333332249
   f64.add
   local.get $0
   local.get $0
   local.get $0
   f64.mul
   f64.mul
   local.get $0
   f64.const 1.58969099521155e-10
   f64.mul
   f64.const -2.5050760253406863e-08
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.sub
   f64.mul
   local.get $7
   f64.sub
   local.get $1
   f64.const -0.16666666666666632
   f64.mul
   f64.sub
   f64.sub
  end
  local.tee $0
  f64.neg
  local.get $0
  local.get $3
  i32.const 2
  i32.and
  select
 )
 (func $~lib/typedarray/Uint8ClampedArray#__set (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=8
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1776
   i32.const 318
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=4
  i32.add
  local.get $2
  i32.const 255
  local.get $2
  i32.sub
  i32.const 31
  i32.shr_s
  i32.or
  local.get $2
  i32.const 31
  i32.shr_s
  i32.const -1
  i32.xor
  i32.and
  i32.store8
 )
 (func $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  local.get $1
  local.tee $2
  i32.const 255
  i32.and
  i32.const -1028477379
  i32.mul
  i32.const 374761394
  i32.add
  i32.const 17
  i32.rotl
  i32.const 668265263
  i32.mul
  local.tee $0
  i32.const 15
  i32.shr_u
  local.get $0
  i32.xor
  i32.const -2048144777
  i32.mul
  local.tee $0
  i32.const 13
  i32.shr_u
  local.get $0
  i32.xor
  i32.const -1028477379
  i32.mul
  local.tee $0
  i32.const 16
  i32.shr_u
  local.get $0
  i32.xor
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  block $__inlined_func$~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#find
   loop $while-continue|0
    local.get $0
    if
     local.get $0
     local.tee $1
     i32.load offset=8
     local.tee $0
     i32.const 1
     i32.and
     if (result i32)
      i32.const 0
     else
      local.get $1
      i32.load8_u
      local.get $2
      i32.const 255
      i32.and
      i32.eq
     end
     br_if $__inlined_func$~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#find
     local.get $0
     i32.const -2
     i32.and
     local.set $0
     br $while-continue|0
    end
   end
   i32.const 0
   local.set $1
  end
  local.get $1
  i32.eqz
  if
   i32.const 1840
   i32.const 1904
   i32.const 105
   i32.const 17
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=4
 )
 (func $~lib/math/NativeMath.atan (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 i32)
  (local $3 i32)
  (local $4 f64)
  (local $5 f64)
  local.get $0
  local.set $1
  local.get $0
  i64.reinterpret_f64
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  i32.const 2147483647
  i32.and
  local.tee $2
  i32.const 1141899264
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.ne
   if
    local.get $0
    return
   end
   f64.const 1.5707963267948966
   local.get $1
   f64.copysign
   return
  end
  local.get $2
  i32.const 1071382528
  i32.lt_u
  if
   local.get $2
   i32.const 1044381696
   i32.lt_u
   if
    local.get $0
    return
   end
   i32.const -1
   local.set $3
  else
   local.get $0
   f64.abs
   local.set $0
   local.get $2
   i32.const 1072889856
   i32.lt_u
   if (result f64)
    local.get $2
    i32.const 1072037888
    i32.lt_u
    if (result f64)
     local.get $0
     local.get $0
     f64.add
     f64.const 1
     f64.sub
     local.get $0
     f64.const 2
     f64.add
     f64.div
    else
     i32.const 1
     local.set $3
     local.get $0
     f64.const 1
     f64.sub
     local.get $0
     f64.const 1
     f64.add
     f64.div
    end
   else
    local.get $2
    i32.const 1073971200
    i32.lt_u
    if (result f64)
     i32.const 2
     local.set $3
     local.get $0
     f64.const 1.5
     f64.sub
     local.get $0
     f64.const 1.5
     f64.mul
     f64.const 1
     f64.add
     f64.div
    else
     i32.const 3
     local.set $3
     f64.const -1
     local.get $0
     f64.div
    end
   end
   local.set $0
  end
  local.get $0
  local.get $0
  f64.mul
  local.tee $5
  local.get $5
  f64.mul
  local.set $4
  local.get $0
  local.get $5
  local.get $4
  local.get $4
  local.get $4
  local.get $4
  local.get $4
  f64.const 0.016285820115365782
  f64.mul
  f64.const 0.049768779946159324
  f64.add
  f64.mul
  f64.const 0.06661073137387531
  f64.add
  f64.mul
  f64.const 0.09090887133436507
  f64.add
  f64.mul
  f64.const 0.14285714272503466
  f64.add
  f64.mul
  f64.const 0.3333333333333293
  f64.add
  f64.mul
  local.get $4
  local.get $4
  local.get $4
  local.get $4
  local.get $4
  f64.const -0.036531572744216916
  f64.mul
  f64.const -0.058335701337905735
  f64.add
  f64.mul
  f64.const -0.0769187620504483
  f64.add
  f64.mul
  f64.const -0.11111110405462356
  f64.add
  f64.mul
  f64.const -0.19999999999876483
  f64.add
  f64.mul
  f64.add
  f64.mul
  local.set $4
  local.get $3
  i32.const 0
  i32.lt_s
  if
   local.get $0
   local.get $4
   f64.sub
   return
  end
  block $break|0
   block $case4|0
    block $case3|0
     block $case2|0
      block $case1|0
       block $case0|0
        local.get $3
        br_table $case0|0 $case1|0 $case2|0 $case3|0 $case4|0
       end
       f64.const 0.4636476090008061
       local.get $4
       f64.const 2.2698777452961687e-17
       f64.sub
       local.get $0
       f64.sub
       f64.sub
       local.set $0
       br $break|0
      end
      f64.const 0.7853981633974483
      local.get $4
      f64.const 3.061616997868383e-17
      f64.sub
      local.get $0
      f64.sub
      f64.sub
      local.set $0
      br $break|0
     end
     f64.const 0.982793723247329
     local.get $4
     f64.const 1.3903311031230998e-17
     f64.sub
     local.get $0
     f64.sub
     f64.sub
     local.set $0
     br $break|0
    end
    f64.const 1.5707963267948966
    local.get $4
    f64.const 6.123233995736766e-17
    f64.sub
    local.get $0
    f64.sub
    f64.sub
    local.set $0
    br $break|0
   end
   unreachable
  end
  local.get $0
  local.get $1
  f64.copysign
 )
 (func $~lib/typedarray/Float64Array#__get (param $0 i32) (param $1 i32) (result f64)
  local.get $0
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.get $1
  i32.le_u
  if
   i32.const 1248
   i32.const 1776
   i32.const 1435
   i32.const 64
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  f64.load
 )
 (func $~lib/rt/itcms/__pin (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 3
   i32.eq
   if
    i32.const 1952
    i32.const 1120
    i32.const 337
    i32.const 7
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/pinSpace
   local.tee $3
   i32.load offset=8
   local.set $2
   local.get $1
   local.get $3
   i32.const 3
   i32.or
   i32.store offset=4
   local.get $1
   local.get $2
   i32.store offset=8
   local.get $2
   local.get $2
   i32.load offset=4
   i32.const 3
   i32.and
   local.get $1
   i32.or
   i32.store offset=4
   local.get $3
   local.get $1
   i32.store offset=8
  end
  local.get $0
 )
 (func $~lib/rt/itcms/__unpin (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.const 3
  i32.ne
  if
   i32.const 2016
   i32.const 1120
   i32.const 351
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/state
  i32.const 1
  i32.eq
  if
   local.get $1
   call $~lib/rt/itcms/Object#makeGray
  else
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/fromSpace
   local.tee $0
   i32.load offset=8
   local.set $2
   local.get $1
   global.get $~lib/rt/itcms/white
   local.get $0
   i32.or
   i32.store offset=4
   local.get $1
   local.get $2
   i32.store offset=8
   local.get $2
   local.get $2
   i32.load offset=4
   i32.const 3
   i32.and
   local.get $1
   i32.or
   i32.store offset=4
   local.get $0
   local.get $1
   i32.store offset=8
  end
 )
 (func $~lib/rt/itcms/__collect
  global.get $~lib/rt/itcms/state
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    global.get $~lib/rt/itcms/state
    if
     call $~lib/rt/itcms/step
     drop
     br $while-continue|0
    end
   end
  end
  call $~lib/rt/itcms/step
  drop
  loop $while-continue|1
   global.get $~lib/rt/itcms/state
   if
    call $~lib/rt/itcms/step
    drop
    br $while-continue|1
   end
  end
  global.get $~lib/rt/itcms/total
  i64.extend_i32_u
  i64.const 200
  i64.mul
  i64.const 100
  i64.div_u
  i32.wrap_i64
  i32.const 1024
  i32.add
  global.set $~lib/rt/itcms/threshold
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner0
   block $invalid
    block $assembly/index/HitResult
     block $assembly/index/HitData
      block $assembly/index/WallData
       block $assembly/index/Camera
        block $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>
         block $assembly/index/Sprites
          block $assembly/index/TileTypes
           block $~lib/string/String
            block $~lib/arraybuffer/ArrayBuffer
             local.get $0
             i32.const 8
             i32.sub
             i32.load
             br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $folding-inner0 $assembly/index/TileTypes $assembly/index/Sprites $folding-inner0 $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray> $folding-inner0 $assembly/index/Camera $assembly/index/WallData $assembly/index/HitData $assembly/index/HitResult $invalid
            end
            return
           end
           return
          end
          return
         end
         return
        end
        local.get $0
        i32.load
        local.tee $1
        if
         local.get $1
         call $byn-split-outlined-A$~lib/rt/itcms/__visit
        end
        local.get $0
        i32.load offset=16
        i32.const 12
        i32.mul
        local.get $0
        i32.load offset=8
        local.tee $1
        local.tee $0
        i32.add
        local.set $3
        loop $while-continue|0
         local.get $0
         local.get $3
         i32.lt_u
         if
          local.get $0
          i32.load offset=8
          i32.const 1
          i32.and
          i32.eqz
          if
           local.get $0
           i32.load offset=4
           local.tee $2
           if
            local.get $2
            call $byn-split-outlined-A$~lib/rt/itcms/__visit
           end
          end
          local.get $0
          i32.const 12
          i32.add
          local.set $0
          br $while-continue|0
         end
        end
        local.get $1
        if
         local.get $1
         call $byn-split-outlined-A$~lib/rt/itcms/__visit
        end
        return
       end
       return
      end
      local.get $0
      i32.load
      local.tee $1
      if
       local.get $1
       call $byn-split-outlined-A$~lib/rt/itcms/__visit
      end
      local.get $0
      i32.load offset=4
      local.tee $0
      if
       local.get $0
       call $byn-split-outlined-A$~lib/rt/itcms/__visit
      end
      return
     end
     return
    end
    return
   end
   unreachable
  end
  local.get $0
  i32.load
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
 )
 (func $~start
  call $start:assembly/index
 )
 (func $assembly/index/hitData (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 f64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   local.get $0
   f64.load offset=24
   f64.const 0.015625
   f64.mul
   f64.floor
   local.tee $3
   f64.const 0
   f64.lt
   global.get $assembly/index/mapSizeX
   f64.convert_i32_s
   local.get $3
   f64.le
   i32.or
   local.get $0
   f64.load offset=16
   f64.const 0.015625
   f64.mul
   f64.floor
   local.tee $7
   f64.const 0
   f64.lt
   i32.or
   global.get $assembly/index/mapSizeY
   f64.convert_i32_s
   local.get $7
   f64.le
   i32.or
   if
    i32.const 1
    local.set $4
   else
    global.get $~lib/memory/__stack_pointer
    global.get $assembly/index/mapData
    local.tee $2
    i32.store
    local.get $2
    local.get $7
    global.get $assembly/index/mapSizeX
    f64.convert_i32_s
    f64.mul
    local.get $3
    f64.add
    i32.trunc_f64_s
    call $~lib/typedarray/Uint8ClampedArray#__get
    global.get $assembly/index/TILE_TYPES
    i32.load8_u offset=3
    i32.eq
    if (result i32)
     i32.const 1
     local.set $5
     local.get $1
     if (result f64)
      local.get $0
      f64.load offset=24
     else
      local.get $0
      f64.load offset=16
     end
     f64.floor
     call $~lib/math/NativeMath.mod
     i32.trunc_f64_u
    else
     i32.const 0
    end
    local.set $2
   end
   loop $while-continue|0
    local.get $4
    local.get $5
    i32.or
    i32.eqz
    if
     local.get $0
     local.get $0
     f64.load offset=24
     local.get $0
     f64.load
     f64.add
     f64.store offset=24
     local.get $0
     local.get $0
     f64.load offset=16
     local.get $0
     f64.load offset=8
     f64.add
     f64.store offset=16
     local.get $0
     f64.load offset=24
     f64.const 0.015625
     f64.mul
     f64.floor
     local.tee $3
     f64.const 0
     f64.lt
     global.get $assembly/index/mapSizeX
     f64.convert_i32_s
     local.get $3
     f64.le
     i32.or
     local.get $0
     f64.load offset=16
     f64.const 0.015625
     f64.mul
     f64.floor
     local.tee $7
     f64.const 0
     f64.lt
     i32.or
     global.get $assembly/index/mapSizeY
     f64.convert_i32_s
     local.get $7
     f64.le
     i32.or
     if
      i32.const 1
      local.set $4
     else
      global.get $~lib/memory/__stack_pointer
      global.get $assembly/index/mapData
      local.tee $6
      i32.store
      local.get $6
      local.get $7
      global.get $assembly/index/mapSizeX
      f64.convert_i32_s
      f64.mul
      f64.trunc
      local.get $3
      f64.add
      i32.trunc_f64_s
      call $~lib/typedarray/Uint8ClampedArray#__get
      global.get $assembly/index/TILE_TYPES
      i32.load8_u offset=3
      i32.eq
      if
       i32.const 1
       local.set $5
       local.get $1
       if (result f64)
        local.get $0
        f64.load offset=24
       else
        local.get $0
        f64.load offset=16
       end
       f64.floor
       call $~lib/math/NativeMath.mod
       i32.trunc_f64_u
       local.set $2
      end
     end
     br $while-continue|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i32.const 0
   i32.store
   local.get $4
   i32.const 16
   i32.const 11
   call $~lib/rt/itcms/__new
   local.tee $4
   i32.store
   local.get $4
   i32.const 0
   i32.store8
   local.get $4
   f64.const 0
   f64.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   local.get $4
   i32.store offset=4
   local.get $4
   local.get $2
   i32.store8
   local.get $4
   local.get $0
   f64.load offset=24
   global.get $assembly/index/camera
   local.tee $1
   f64.load
   f64.sub
   f64.abs
   local.tee $3
   local.get $3
   f64.mul
   local.get $0
   f64.load offset=16
   local.get $1
   f64.load offset=8
   f64.sub
   f64.abs
   local.tee $3
   local.get $3
   f64.mul
   f64.add
   f64.sqrt
   f64.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $4
   return
  end
  i32.const 18576
  i32.const 18624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/index/drawSliver (param $0 f64) (param $1 f64) (param $2 f64) (param $3 f64) (param $4 f64) (result f64)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  (local $10 f64)
  (local $11 f64)
  (local $12 f64)
  (local $13 i32)
  (local $14 f64)
  (local $15 f64)
  (local $16 i64)
  (local $17 f64)
  (local $18 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2164
  i32.lt_s
  if
   i32.const 18576
   i32.const 18624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $5
  i64.const 0
  i64.store
  local.get $5
  i32.const 0
  i32.store offset=8
  global.get $assembly/index/camera
  local.tee $5
  local.get $1
  f64.store offset=24
  local.get $5
  local.get $2
  f64.store offset=16
  local.get $5
  local.get $3
  f64.store
  local.get $5
  local.get $4
  f64.store offset=8
  local.get $0
  call $assembly/index/distToWall
  local.set $2
  global.get $~lib/memory/__stack_pointer
  global.get $assembly/index/wallDistances
  local.tee $5
  i32.store
  local.get $0
  i32.trunc_f64_u
  local.tee $13
  local.get $5
  i32.load offset=8
  i32.const 3
  i32.shr_u
  i32.ge_u
  if
   i32.const 1248
   i32.const 1776
   i32.const 1446
   i32.const 64
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  i32.load offset=4
  local.get $13
  i32.const 3
  i32.shl
  i32.add
  local.get $2
  f64.store
  f64.const 64
  local.get $2
  f64.div
  global.get $assembly/index/distToPlane
  f64.mul
  local.set $4
  global.get $assembly/index/beta
  call $~lib/math/NativeMath.cos
  local.set $14
  global.get $assembly/index/theta
  call $~lib/math/NativeMath.cos
  local.set $15
  global.get $assembly/index/theta
  call $~lib/math/NativeMath.sin
  local.set $1
  global.get $assembly/index/halfHeight
  f64.convert_i32_u
  local.get $4
  f64.const 0.5
  f64.mul
  f64.sub
  global.get $assembly/index/camera
  f64.load offset=24
  local.tee $3
  local.get $2
  f64.div
  global.get $assembly/index/distToPlane
  f64.mul
  f64.add
  local.tee $10
  local.get $4
  f64.add
  f64.floor
  i64.trunc_f64_u
  local.set $9
  f64.const 1
  f64.const 1
  f64.const 6250
  f64.const 1
  local.get $2
  f64.sub
  f64.div
  f64.abs
  f64.div
  f64.sub
  local.set $2
  global.get $assembly/index/distToPlane
  local.get $3
  f64.const 32
  f64.add
  f64.mul
  local.set $3
  loop $for-loop|0
   global.get $assembly/index/screenHeight
   local.get $7
   i32.gt_u
   if
    global.get $assembly/index/screenWidth
    local.get $7
    i32.mul
    f64.convert_i32_u
    local.get $0
    f64.add
    i64.trunc_f64_s
    i64.const 2
    i64.shl
    local.set $8
    local.get $10
    local.get $7
    f64.convert_i32_u
    f64.gt
    if
     global.get $~lib/memory/__stack_pointer
     global.get $assembly/index/imageBuffer
     local.tee $5
     i32.store
     local.get $5
     local.get $8
     i32.wrap_i64
     local.get $7
     i32.const 1
     i32.shr_u
     i32.const 150
     i32.add
     call $~lib/typedarray/Uint8ClampedArray#__set
     global.get $~lib/memory/__stack_pointer
     global.get $assembly/index/imageBuffer
     local.tee $5
     i32.store
     local.get $5
     local.get $8
     i64.const 1
     i64.add
     i32.wrap_i64
     i32.const 206
     call $~lib/typedarray/Uint8ClampedArray#__set
     global.get $~lib/memory/__stack_pointer
     global.get $assembly/index/imageBuffer
     local.tee $5
     i32.store
     local.get $5
     local.get $8
     i64.const 2
     i64.add
     i32.wrap_i64
     i32.const 235
     call $~lib/typedarray/Uint8ClampedArray#__set
     global.get $~lib/memory/__stack_pointer
     global.get $assembly/index/imageBuffer
     local.tee $5
     i32.store
     local.get $5
     local.get $8
     i64.const 3
     i64.add
     i32.wrap_i64
     i32.const 255
     call $~lib/typedarray/Uint8ClampedArray#__set
    else
     local.get $9
     local.get $7
     i64.extend_i32_u
     i64.gt_u
     if
      local.get $7
      f64.convert_i32_u
      local.get $10
      f64.sub
      f64.const 1
      f64.lt
      if
       i32.const 0
       local.set $5
       loop $for-loop|1
        local.get $5
        i32.const 4
        i32.lt_s
        if
         global.get $~lib/memory/__stack_pointer
         global.get $assembly/index/imageBuffer
         local.tee $13
         i32.store
         local.get $13
         local.get $5
         i64.extend_i32_s
         local.get $8
         i64.add
         i32.wrap_i64
         i32.const 200
         i32.const 0
         local.get $5
         i32.const 3
         i32.eq
         select
         call $~lib/typedarray/Uint8ClampedArray#__set
         local.get $5
         i32.const 1
         i32.add
         local.set $5
         br $for-loop|1
        end
       end
      else
       global.get $~lib/memory/__stack_pointer
       local.tee $5
       global.get $assembly/index/textures
       local.tee $13
       i32.store
       local.get $5
       local.get $13
       global.get $assembly/index/TILE_TYPES
       i32.load8_u offset=3
       call $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#get
       local.tee $5
       i32.store offset=4
       global.get $assembly/index/wallSlice
       local.get $7
       f64.convert_i32_u
       local.get $10
       f64.sub
       local.get $4
       f64.div
       f64.const 64
       f64.mul
       f64.floor
       i32.trunc_f64_u
       i32.const 6
       i32.shl
       i32.add
       i64.extend_i32_u
       i64.const 2
       i64.shl
       local.set $16
       i64.const 0
       local.set $6
       loop $for-loop|2
        local.get $6
        i64.const 4
        i64.lt_s
        if
         local.get $6
         i64.const 3
         i64.eq
         if
          global.get $~lib/memory/__stack_pointer
          global.get $assembly/index/imageBuffer
          local.tee $13
          i32.store
          local.get $13
          local.get $6
          local.get $8
          i64.add
          i32.wrap_i64
          local.get $5
          local.get $6
          local.get $16
          i64.add
          i32.wrap_i64
          call $~lib/typedarray/Uint8ClampedArray#__get
          call $~lib/typedarray/Uint8ClampedArray#__set
         else
          global.get $~lib/memory/__stack_pointer
          global.get $assembly/index/imageBuffer
          local.tee $13
          i32.store
          local.get $13
          local.get $6
          local.get $8
          i64.add
          i32.wrap_i64
          local.get $2
          local.get $5
          local.get $6
          local.get $16
          i64.add
          i32.wrap_i64
          call $~lib/typedarray/Uint8ClampedArray#__get
          f64.convert_i32_u
          f64.mul
          i32.trunc_f64_u
          i32.const 255
          i32.and
          call $~lib/typedarray/Uint8ClampedArray#__set
         end
         local.get $6
         i64.const 1
         i64.add
         local.set $6
         br $for-loop|2
        end
       end
      end
     else
      block $for-continue|0
       global.get $assembly/index/camera
       local.tee $5
       f64.load
       local.get $15
       local.get $3
       f64.const 1
       local.get $7
       global.get $assembly/index/halfHeight
       i32.sub
       f64.convert_i32_u
       local.tee $11
       local.get $11
       f64.const 0
       f64.eq
       select
       f64.div
       local.get $14
       f64.div
       local.tee $11
       f64.mul
       f64.add
       local.set $17
       local.get $5
       f64.load offset=8
       local.get $1
       local.get $11
       f64.mul
       f64.sub
       local.tee $11
       f64.const 0.015625
       f64.mul
       f64.floor
       local.tee $12
       f64.const 0
       f64.lt
       local.get $17
       f64.const 0.015625
       f64.mul
       f64.floor
       local.tee $18
       f64.const 0
       f64.lt
       i32.or
       global.get $assembly/index/mapSizeX
       f64.convert_i32_s
       local.get $18
       f64.le
       i32.or
       global.get $assembly/index/mapSizeY
       f64.convert_i32_s
       local.get $12
       f64.le
       i32.or
       br_if $for-continue|0
       global.get $~lib/memory/__stack_pointer
       global.get $assembly/index/mapData
       local.tee $5
       i32.store
       local.get $5
       local.get $12
       global.get $assembly/index/mapSizeX
       f64.convert_i32_s
       f64.mul
       local.get $18
       f64.add
       i32.trunc_f64_s
       call $~lib/typedarray/Uint8ClampedArray#__get
       local.set $5
       global.get $~lib/memory/__stack_pointer
       global.get $assembly/index/textures
       local.tee $13
       i32.store
       global.get $~lib/memory/__stack_pointer
       local.get $13
       local.get $5
       call $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#get
       local.tee $5
       i32.store offset=8
       local.get $5
       i32.eqz
       br_if $for-continue|0
       local.get $17
       call $~lib/math/NativeMath.mod
       f64.floor
       local.set $12
       local.get $11
       f64.const 0
       f64.lt
       if (result f64)
        local.get $11
        call $~lib/math/NativeMath.mod
        f64.floor
        f64.const 64
        f64.add
       else
        local.get $11
        call $~lib/math/NativeMath.mod
        f64.floor
       end
       f64.const 64
       f64.mul
       local.get $12
       f64.add
       f64.const 4
       f64.mul
       i64.trunc_f64_s
       local.set $16
       i64.const 0
       local.set $6
       loop $for-loop|3
        local.get $6
        i64.const 4
        i64.lt_s
        if
         global.get $~lib/memory/__stack_pointer
         global.get $assembly/index/imageBuffer
         local.tee $13
         i32.store
         local.get $13
         local.get $6
         local.get $8
         i64.add
         i32.wrap_i64
         local.get $5
         local.get $6
         local.get $16
         i64.add
         i32.wrap_i64
         call $~lib/typedarray/Uint8ClampedArray#__get
         call $~lib/typedarray/Uint8ClampedArray#__set
         local.get $6
         i64.const 1
         i64.add
         local.set $6
         br $for-loop|3
        end
       end
      end
     end
    end
    local.get $7
    i32.const 1
    i32.add
    local.set $7
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  global.get $assembly/index/theta
 )
 (func $assembly/index/drawSprite (param $0 f64) (param $1 f64) (param $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 f64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i64)
  (local $9 i64)
  (local $10 i32)
  (local $11 i64)
  (local $12 f64)
  (local $13 i32)
  (local $14 f64)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 f64)
  (local $19 f64)
  (local $20 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2164
  i32.lt_s
  if
   i32.const 18576
   i32.const 18624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $4
  i64.const 0
  i64.store
  local.get $4
  global.get $assembly/index/sprites
  local.tee $13
  i32.store
  local.get $4
  local.get $13
  local.get $2
  call $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#get
  local.tee $13
  i32.store offset=4
  global.get $assembly/index/camera
  local.tee $4
  f64.load
  local.tee $5
  local.get $0
  f64.const 64
  f64.mul
  local.tee $12
  f64.sub
  f64.abs
  local.tee $0
  local.get $0
  f64.mul
  local.get $4
  f64.load offset=8
  local.tee $0
  local.get $1
  f64.const 64
  f64.mul
  local.tee $1
  f64.sub
  f64.abs
  local.tee $14
  local.get $14
  f64.mul
  f64.add
  f64.sqrt
  f64.const 32
  f64.sub
  local.set $14
  block $__inlined_func$~lib/math/NativeMath.atan2
   local.get $1
   local.get $0
   f64.sub
   f64.neg
   local.tee $0
   local.get $0
   f64.ne
   local.get $12
   local.get $5
   f64.sub
   local.tee $1
   local.get $1
   f64.ne
   i32.or
   if
    local.get $1
    local.get $0
    f64.add
    local.set $0
    br $__inlined_func$~lib/math/NativeMath.atan2
   end
   local.get $0
   i64.reinterpret_f64
   local.tee $3
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   local.set $4
   local.get $1
   i64.reinterpret_f64
   local.tee $6
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   local.set $15
   local.get $6
   i32.wrap_i64
   local.tee $16
   local.get $15
   i32.const 1072693248
   i32.sub
   i32.or
   i32.eqz
   if
    local.get $0
    call $~lib/math/NativeMath.atan
    local.set $0
    br $__inlined_func$~lib/math/NativeMath.atan2
   end
   local.get $15
   i32.const 30
   i32.shr_u
   i32.const 2
   i32.and
   local.get $4
   i32.const 31
   i32.shr_u
   i32.or
   local.set $17
   local.get $4
   i32.const 2147483647
   i32.and
   local.tee $4
   local.get $3
   i32.wrap_i64
   i32.or
   i32.eqz
   if
    block $break|0
     block $case3|0
      block $case2|0
       local.get $17
       br_table $__inlined_func$~lib/math/NativeMath.atan2 $__inlined_func$~lib/math/NativeMath.atan2 $case2|0 $case3|0 $break|0
      end
      f64.const 3.141592653589793
      local.set $0
      br $__inlined_func$~lib/math/NativeMath.atan2
     end
     f64.const -3.141592653589793
     local.set $0
     br $__inlined_func$~lib/math/NativeMath.atan2
    end
   end
   block $folding-inner0
    local.get $15
    i32.const 2147483647
    i32.and
    local.tee $15
    local.get $16
    i32.or
    i32.eqz
    br_if $folding-inner0
    local.get $15
    i32.const 2146435072
    i32.eq
    if
     local.get $4
     i32.const 2146435072
     i32.eq
     if (result f64)
      f64.const 2.356194490192345
      f64.const 0.7853981633974483
      local.get $17
      i32.const 2
      i32.and
      select
      local.tee $0
      f64.neg
      local.get $0
      local.get $17
      i32.const 1
      i32.and
      select
     else
      f64.const 3.141592653589793
      f64.const 0
      local.get $17
      i32.const 2
      i32.and
      select
      local.tee $0
      f64.neg
      local.get $0
      local.get $17
      i32.const 1
      i32.and
      select
     end
     local.set $0
     br $__inlined_func$~lib/math/NativeMath.atan2
    end
    local.get $4
    i32.const 2146435072
    i32.eq
    local.get $4
    local.get $15
    i32.const 67108864
    i32.add
    i32.gt_u
    i32.or
    br_if $folding-inner0
    local.get $15
    local.get $4
    i32.const 67108864
    i32.add
    i32.gt_u
    i32.const 0
    local.get $17
    i32.const 2
    i32.and
    select
    if (result f64)
     f64.const 0
    else
     local.get $0
     local.get $1
     f64.div
     f64.abs
     call $~lib/math/NativeMath.atan
    end
    local.set $0
    block $break|1
     block $case3|1
      block $case2|1
       block $case1|1
        local.get $17
        br_table $__inlined_func$~lib/math/NativeMath.atan2 $case1|1 $case2|1 $case3|1 $break|1
       end
       local.get $0
       f64.neg
       local.set $0
       br $__inlined_func$~lib/math/NativeMath.atan2
      end
      f64.const 3.141592653589793
      local.get $0
      f64.const 1.2246467991473532e-16
      f64.sub
      f64.sub
      local.set $0
      br $__inlined_func$~lib/math/NativeMath.atan2
     end
     local.get $0
     f64.const 1.2246467991473532e-16
     f64.sub
     f64.const 3.141592653589793
     f64.sub
     local.set $0
     br $__inlined_func$~lib/math/NativeMath.atan2
    end
    unreachable
   end
   f64.const -1.5707963267948966
   f64.const 1.5707963267948966
   local.get $17
   i32.const 1
   i32.and
   select
   local.set $0
  end
  loop $while-continue|0
   local.get $0
   f64.const 0
   f64.lt
   if
    local.get $0
    f64.const 6.283185307179586
    f64.add
    local.set $0
    br $while-continue|0
   end
  end
  loop $while-continue|1
   local.get $0
   f64.const 6.283185307179586
   f64.gt
   if
    local.get $0
    f64.const 6.283185307179586
    f64.sub
    local.set $0
    br $while-continue|1
   end
  end
  global.get $assembly/index/camera
  f64.load offset=16
  f64.const 0.5235987755982988
  f64.add
  local.get $0
  local.tee $1
  f64.sub
  local.set $0
  loop $while-continue|02
   local.get $0
   f64.const 0
   f64.lt
   if
    local.get $0
    f64.const 6.283185307179586
    f64.add
    local.set $0
    br $while-continue|02
   end
  end
  loop $while-continue|14
   local.get $0
   f64.const 6.283185307179586
   f64.gt
   if
    local.get $0
    f64.const 6.283185307179586
    f64.sub
    local.set $0
    br $while-continue|14
   end
  end
  local.get $0
  global.get $assembly/index/screenWidth
  local.tee $4
  f64.convert_i32_u
  local.tee $5
  f64.mul
  f64.const 1.0471975511965976
  f64.div
  local.tee $0
  f64.ceil
  local.tee $12
  local.get $12
  f64.const 1
  f64.sub
  local.get $0
  local.get $12
  f64.const 0.5
  f64.sub
  f64.ge
  select
  i64.trunc_f64_s
  local.set $3
  f64.const 1
  f64.const 1
  local.get $14
  f64.sub
  f64.div
  global.get $assembly/index/camera
  f64.load offset=24
  local.get $14
  f64.div
  global.get $assembly/index/distToPlane
  local.tee $0
  f64.mul
  f64.add
  local.tee $18
  f64.ceil
  local.set $19
  local.get $0
  f64.const 64
  f64.mul
  local.get $14
  f64.div
  local.tee $12
  f64.const 0.5
  f64.mul
  local.tee $20
  f64.ceil
  local.tee $0
  local.get $0
  f64.const 1
  f64.sub
  local.get $20
  local.get $0
  f64.const 0.5
  f64.sub
  f64.ge
  select
  i64.trunc_f64_s
  local.set $8
  f64.const 0
  local.set $0
  global.get $assembly/index/halfHeight
  f64.convert_i32_u
  local.get $19
  local.get $19
  f64.const 1
  f64.sub
  local.get $18
  local.get $19
  f64.const 0.5
  f64.sub
  f64.ge
  select
  f64.add
  i64.trunc_f64_s
  f64.convert_i64_s
  local.get $4
  i32.const 1
  i32.shr_u
  f64.convert_i32_u
  local.get $3
  f64.convert_i64_s
  f64.sub
  f64.abs
  f64.const 3.141592653589793
  f64.mul
  local.get $5
  f64.div
  call $~lib/math/NativeMath.cos
  f64.const -2
  f64.mul
  global.get $assembly/index/screenWidth
  f64.convert_i32_u
  f64.mul
  local.get $14
  f64.div
  f64.const 4
  f64.add
  f64.add
  f64.floor
  i64.trunc_f64_s
  local.set $9
  local.get $8
  global.get $assembly/index/screenWidth
  i64.extend_i32_u
  i64.add
  local.get $3
  i64.lt_s
  if
   local.get $3
   global.get $assembly/index/screenWidth
   i32.const 1
   i32.shl
   f64.convert_i32_u
   f64.const 3.141592653589793
   f64.mul
   f64.const 1.0471975511965976
   f64.div
   f64.floor
   i64.trunc_f64_s
   i64.sub
   local.set $3
  end
  f64.const 64
  local.get $12
  f64.div
  local.set $18
  local.get $8
  f64.convert_i64_s
  f64.const -0
  local.get $1
  call $~lib/math/NativeMath.sin
  f64.sub
  local.tee $19
  f64.mul
  local.set $1
  loop $for-loop|3
   local.get $12
   local.get $10
   f64.convert_i32_u
   f64.gt
   if
    local.get $3
    f64.convert_i64_s
    local.get $1
    f64.sub
    f64.floor
    i64.trunc_f64_s
    local.set $7
    local.get $1
    local.get $19
    f64.sub
    local.set $1
    global.get $assembly/index/screenWidth
    i64.extend_i32_u
    local.get $7
    i64.gt_s
    local.get $7
    i64.const 0
    i64.ge_s
    i32.and
    if
     global.get $~lib/memory/__stack_pointer
     global.get $assembly/index/wallDistances
     local.tee $4
     i32.store
     local.get $4
     local.get $7
     i32.wrap_i64
     call $~lib/typedarray/Float64Array#__get
     i64.reinterpret_f64
     i64.const 1
     i64.shl
     i64.const 2
     i64.sub
     i64.const -9007199254740994
     i64.gt_u
     if (result i32)
      i32.const 1
     else
      global.get $~lib/memory/__stack_pointer
      global.get $assembly/index/wallDistances
      local.tee $4
      i32.store
      local.get $4
      local.get $7
      i32.wrap_i64
      call $~lib/typedarray/Float64Array#__get
      local.get $14
      f64.gt
     end
     if
      f64.const -8
      f64.const 0
      global.get $assembly/index/SPRITES
      i32.load8_u
      local.get $2
      i32.const 255
      i32.and
      i32.eq
      select
      local.set $5
      local.get $9
      local.get $8
      i64.sub
      local.set $6
      loop $for-loop|4
       local.get $8
       local.get $9
       i64.add
       local.get $6
       i64.gt_s
       if
        global.get $assembly/index/screenHeight
        i64.extend_i32_u
        local.get $6
        i64.gt_s
        local.get $6
        i64.const 0
        i64.ge_s
        i32.and
        if
         local.get $7
         global.get $assembly/index/screenWidth
         i64.extend_i32_u
         local.get $6
         i64.mul
         i64.add
         i64.const 2
         i64.shl
         local.set $11
         local.get $5
         f64.floor
         f64.const 64
         f64.mul
         local.get $0
         f64.floor
         f64.add
         i32.trunc_f64_s
         i32.const 2
         i32.shl
         local.tee $15
         i32.const 0
         i32.ge_s
         if (result i32)
          local.get $13
          i32.load offset=8
          local.get $15
          i32.gt_s
         else
          i32.const 0
         end
         if
          i32.const 3
          local.set $4
          loop $for-loop|5
           local.get $4
           i32.const 0
           i32.ge_s
           if
            i32.const 0
            local.get $4
            i32.const 3
            i32.eq
            local.get $13
            local.get $4
            local.get $15
            i32.add
            call $~lib/typedarray/Uint8ClampedArray#__get
            local.tee $16
            select
            i32.eqz
            if
             global.get $~lib/memory/__stack_pointer
             global.get $assembly/index/imageBuffer
             local.tee $17
             i32.store
             local.get $17
             local.get $4
             i64.extend_i32_s
             local.get $11
             i64.add
             i32.wrap_i64
             local.get $16
             call $~lib/typedarray/Uint8ClampedArray#__set
             local.get $4
             i32.const 1
             i32.sub
             local.set $4
             br $for-loop|5
            end
           end
          end
         end
        end
        local.get $5
        local.get $18
        f64.add
        local.set $5
        local.get $6
        i64.const 1
        i64.add
        local.set $6
        br $for-loop|4
       end
      end
     end
    end
    local.get $0
    local.get $18
    f64.add
    local.set $0
    local.get $10
    i32.const 1
    i32.add
    local.set $10
    br $for-loop|3
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2164
  i32.lt_s
  if
   i32.const 18576
   i32.const 18624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1664
   i32.const 1712
   i32.const 52
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 0
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2164
  i32.lt_s
  if
   i32.const 18576
   i32.const 18624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 24
  i32.const 6
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $1
  i32.store
  local.get $1
  if
   local.get $0
   local.get $1
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  local.get $0
  i32.const 3
  i32.store offset=4
  local.get $0
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $1
  i32.store offset=8
  local.get $1
  if
   local.get $0
   local.get $1
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.store
   local.get $0
   i32.load
   local.get $1
   local.tee $3
   i32.const 255
   i32.and
   i32.const -1028477379
   i32.mul
   i32.const 374761394
   i32.add
   i32.const 17
   i32.rotl
   i32.const 668265263
   i32.mul
   local.tee $1
   i32.const 15
   i32.shr_u
   local.get $1
   i32.xor
   i32.const -2048144777
   i32.mul
   local.tee $1
   i32.const 13
   i32.shr_u
   local.get $1
   i32.xor
   i32.const -1028477379
   i32.mul
   local.tee $1
   i32.const 16
   i32.shr_u
   local.get $1
   i32.xor
   local.tee $8
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $1
   block $__inlined_func$~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#find
    loop $while-continue|0
     local.get $1
     if
      local.get $1
      i32.load offset=8
      local.tee $4
      i32.const 1
      i32.and
      if (result i32)
       i32.const 0
      else
       local.get $1
       i32.load8_u
       local.get $3
       i32.const 255
       i32.and
       i32.eq
      end
      br_if $__inlined_func$~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#find
      local.get $4
      i32.const -2
      i32.and
      local.set $1
      br $while-continue|0
     end
    end
    i32.const 0
    local.set $1
   end
   local.get $1
   if
    local.get $1
    local.get $2
    i32.store offset=4
    local.get $2
    if
     local.get $0
     local.get $2
     i32.const 1
     call $byn-split-outlined-A$~lib/rt/itcms/__link
    end
   else
    local.get $0
    i32.load offset=16
    local.get $0
    i32.load offset=12
    i32.eq
    if
     local.get $0
     i32.load offset=20
     local.get $0
     i32.load offset=12
     i32.const 3
     i32.mul
     i32.const 4
     i32.div_s
     i32.lt_s
     if (result i32)
      local.get $0
      i32.load offset=4
     else
      local.get $0
      i32.load offset=4
      i32.const 1
      i32.shl
      i32.const 1
      i32.or
     end
     local.set $7
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2164
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     local.tee $1
     i64.const 0
     i64.store
     local.get $1
     local.get $7
     i32.const 1
     i32.add
     local.tee $1
     i32.const 2
     i32.shl
     call $~lib/arraybuffer/ArrayBuffer#constructor
     local.tee $6
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.const 3
     i32.shl
     i32.const 3
     i32.div_s
     local.tee $9
     i32.const 12
     i32.mul
     call $~lib/arraybuffer/ArrayBuffer#constructor
     local.tee $4
     i32.store offset=4
     local.get $0
     i32.load offset=8
     local.tee $5
     local.get $0
     i32.load offset=16
     i32.const 12
     i32.mul
     i32.add
     local.set $10
     local.get $4
     local.set $1
     loop $while-continue|00
      local.get $5
      local.get $10
      i32.ne
      if
       local.get $5
       i32.load offset=8
       i32.const 1
       i32.and
       i32.eqz
       if
        local.get $1
        local.get $5
        i32.load8_u
        local.tee $11
        i32.store8
        local.get $1
        local.get $5
        i32.load offset=4
        i32.store offset=4
        local.get $1
        local.get $11
        i32.const -1028477379
        i32.mul
        i32.const 374761394
        i32.add
        i32.const 17
        i32.rotl
        i32.const 668265263
        i32.mul
        local.tee $11
        i32.const 15
        i32.shr_u
        local.get $11
        i32.xor
        i32.const -2048144777
        i32.mul
        local.tee $11
        i32.const 13
        i32.shr_u
        local.get $11
        i32.xor
        i32.const -1028477379
        i32.mul
        local.tee $11
        i32.const 16
        i32.shr_u
        local.get $11
        i32.xor
        local.get $7
        i32.and
        i32.const 2
        i32.shl
        local.get $6
        i32.add
        local.tee $11
        i32.load
        i32.store offset=8
        local.get $11
        local.get $1
        i32.store
        local.get $1
        i32.const 12
        i32.add
        local.set $1
       end
       local.get $5
       i32.const 12
       i32.add
       local.set $5
       br $while-continue|00
      end
     end
     local.get $0
     local.get $6
     i32.store
     local.get $6
     if
      local.get $0
      local.get $6
      i32.const 0
      call $byn-split-outlined-A$~lib/rt/itcms/__link
     end
     local.get $0
     local.get $7
     i32.store offset=4
     local.get $0
     local.get $4
     i32.store offset=8
     local.get $4
     if
      local.get $0
      local.get $4
      i32.const 0
      call $byn-split-outlined-A$~lib/rt/itcms/__link
     end
     local.get $0
     local.get $9
     i32.store offset=12
     local.get $0
     local.get $0
     i32.load offset=20
     i32.store offset=16
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
    end
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=8
    local.tee $1
    i32.store
    local.get $0
    local.get $0
    i32.load offset=16
    local.tee $4
    i32.const 1
    i32.add
    i32.store offset=16
    local.get $4
    i32.const 12
    i32.mul
    local.get $1
    i32.add
    local.tee $1
    local.get $3
    i32.store8
    local.get $1
    local.get $2
    i32.store offset=4
    local.get $2
    if
     local.get $0
     local.get $2
     i32.const 1
     call $byn-split-outlined-A$~lib/rt/itcms/__link
    end
    local.get $0
    local.get $0
    i32.load offset=20
    i32.const 1
    i32.add
    i32.store offset=20
    local.get $1
    local.get $0
    i32.load
    local.get $0
    i32.load offset=4
    local.get $8
    i32.and
    i32.const 2
    i32.shl
    i32.add
    local.tee $0
    i32.load
    i32.store offset=8
    local.get $0
    local.get $1
    i32.store
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 18576
  i32.const 18624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/index/HitData#constructor (result i32)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2164
  i32.lt_s
  if
   i32.const 18576
   i32.const 18624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 32
  i32.const 10
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  f64.const 0
  f64.store
  local.get $0
  f64.const 0
  f64.store offset=8
  local.get $0
  f64.const 0
  f64.store offset=16
  local.get $0
  f64.const 0
  f64.store offset=24
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/index/WallData#constructor (result i32)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2164
  i32.lt_s
  if
   i32.const 18576
   i32.const 18624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 8
  i32.const 9
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/index/setMapData (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2164
  i32.lt_s
  if
   i32.const 18576
   i32.const 18624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  local.get $0
  i32.store
  local.get $3
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
  global.set $assembly/index/mapData
  local.get $1
  i32.extend16_s
  global.set $assembly/index/mapSizeX
  local.get $2
  i32.extend16_s
  global.set $assembly/index/mapSizeY
  global.get $assembly/index/mapData
 )
 (func $export:assembly/index/setImageBuffer (param $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2164
  i32.lt_s
  if
   i32.const 18576
   i32.const 18624
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  local.get $0
  i32.store
  local.get $0
  global.set $assembly/index/imageBuffer
  local.get $1
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $export:assembly/index/setTexture (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   local.get $1
   i32.store
   local.get $2
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   i32.const 0
   i32.store
   local.get $2
   global.get $assembly/index/textures
   local.tee $2
   i32.store
   local.get $2
   local.get $0
   local.get $1
   call $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#set
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 18576
  i32.const 18624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $export:assembly/index/setSprite (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   local.get $1
   i32.store
   local.get $2
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2164
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   i32.const 0
   i32.store
   local.get $2
   global.get $assembly/index/sprites
   local.tee $2
   i32.store
   local.get $2
   local.get $0
   local.get $1
   call $~lib/map/Map<u8,~lib/typedarray/Uint8ClampedArray>#set
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 18576
  i32.const 18624
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $byn-split-outlined-A$~lib/rt/itcms/__visit (param $0 i32)
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $byn-split-outlined-A$~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 1120
   i32.const 294
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load offset=4
   i32.const 3
   i32.and
   local.tee $3
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $0
    local.get $1
    local.get $2
    select
    call $~lib/rt/itcms/Object#makeGray
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    local.get $3
    i32.const 3
    i32.eq
    i32.and
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
)
