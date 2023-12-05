# NutriHealth web service

```
on expired or invalid token : 401 token either modified or invalid message, redirect to homepage
```

<h3>Login</h3>

```
content-type  : json
POST          : api.nutripal.site/login
body          : {email, password}
response      : {message gagal atau berhasil, user attribute dan rolenya, newToken}
on error      : 400 wrong email or password
```

<h3>Register</h3>

```
Content-type   : json
POST           : api.nutripal.site/register
body           : {email,nama_depan,nama_belakang,password,tanggal_lahir}
tanggal lahir date "tahun-bulan-tgl"
ex             : "2001-03-31"
response       : {message gagal berhasil, user attribute dan rolenya, newToken}
on error       : 409 email already registered
```


<h3>Poliklinik</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET            : api.nutripal.site/poliklinik
body           : {pages,limit}
response       : [
  {
    poli_id
    ...atr lainnya
    dokter : [ ]
  }
]
```
<h5>get one</h5>

```
Content-type   : json
GET            : api.nutripal.site/poliklinik/:id
body           : None
response       : 
  {
    poli_id
    ...atr lainnya
    dokter : [ ]
  }
```
<h5>create poliklinik</h5>

```
Content-type   : json
POST           : api.nutripal.site/poliklinik
headers        : Authorization admin token
body           : {
  nama_poliklinik
  ,lokasi_gedung : ['Lantai 1','Lantai 2','Lantai 3', ...] pilih
  ,
}
```
<h5>delete poliklinik</h5>

```
Content-type   : json
headers        : Authorization admin token
DELETE         : api.nutripal.site/poliklinik/:id
body           : None
on error       : 404 poliklinik not found
```
<h5>Update poliklinik</h5>

```
Content-type   : json
headers        : Authorization admin token
PUT            : api.nutripal.site/poliklinik/:id
body           : {
  nama_poli : string
  lokasi_gedung : string
}
on error       : 404 poliklinik not found
```
<h5>Search poliklinik</h5>

```
Content-type   : json
GET            : api.nutripal.site/cari/poliklinik?keyword=xxx
- xxx adalah query keyword
body           : None
response       : [
  {
    makanan_id
    ...atr lainnya
  }
]
```

<h3>dokter</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET            : api.nutripal.site/dokter
body           : {pages,limit}
response       : [
  {
    dokter_id
    ...atr lainnya
    jadwal : [ {
      jadwal_id : int,
      ,hari  : string
      ,mulai : string (hh:mm:ss) atau (hh:mm)
      ,akhir : string (hh:mm:ss) atau (hh:mm)}
    
      }
    ]
]
```

<h5>get one</h5>

```
Content-type   : json
GET            : api.nutripal.site/dokter/:id
body           : None
response       : 
  {
    dokter_id
    ...atr lainnya
    jadwal : [ ]
  }
```
<h5>delete dokter</h5>

```
Content-type   : json
headers        : Authorization Admin Token
DELETE         : api.nutripal.site/dokter/:id
body           : None
response       : succesful message
on error       : 404 dokter not found
```
<h5>create dokter</h5>

```
Content-type   : json
headers        : Authorization Admin Token
POST           : api.nutripal.site/dokter/
body           : {
  nama_depan : string,
  nama_belakang : string,
  email  : string,
  no_telp  : string,
  spesialis  : string,
  poli_id  : number
}
response       : succesful message
on error       : 409 email already registered
```
<h5>update dokter</h5>

```
Content-type   : json
headers        : Authorization Admin Token
PUT            : api.nutripal.site/dokter/:id
body           : {
  nama_depan : string,
  nama_belakang : string,
  email  : string,
  no_telp  : string,
  spesialis  : string,
  poli_id  : number
}
response       : succesful message
on error       : 404 dokter not found
```
<h5>Search dokter</h5>

```
Content-type   : json
Headers        : Authorization Admin
GET            : api.nutripal.site/cari/dokter?keword=xxxxx
- xxxx = adalah kata kunci
body           : None
response       : [
  {
    dokter_id,
    ...attr user lainnya
  }
]

```
<h3>makanan</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET            : api.nutripal.site/makanan
body           : {pages,limit}
response       : [
  {
    makanan_id
    ...atr lainnya
  }
]
```

<h5>get one</h5>

```
Content-type   : json
GET           : api.nutripal.site/makanan/:id
body           : None
response      : 
  {
    makanan_id
    ...atr lainnya
  }
```

<h5>add to favorite for 1 user only</h5>

```
Content-type   : json
POST           : api.nutripal.site/makanan/:id_makanan/favorite
Headers        : Authorization User Token
body           : None
response       : {succesfull message}
on error       : 409 already added
```

<h5>remove favorite for 1 user only</h5>

```
Content-type   : json
DELETE         : api.nutripal.site/makanan/:id_makanan/favorite
Headers        : Authorization User Token
body           : None
response       : {succesfull message}
on error       : 404 favorite not found
```

<h5>Update Makanan</h5>

```
Content-type   : json
PUT            : api.nutripal.site/makanan/:id_makanan/
Headers        : Authorization Admin Token
body           : {
    nama_makanan : str
  ,energi : number
  ,lemak  : number
  ,lemak_jenuh  : number
  ,lemak_tak_jenuh_ganda  : number
  ,lemak_tak_jenuh_tunggal  : number
  ,kolestrol  : number
  ,protein  : number
  ,karbohidrat  : number
  ,serat  : number
  ,gula  : number
  ,sodium  : number
  ,kalium  : number
}
response       : {succesfull message}
on error       : 404 favorite not found
```

<h3>Favorite</h3>
<h5>get all pages</h5>

```
Content-type   : json
Headers        : Authorization User Token
GET            : api.nutripal.site/favorite
body           : {pages,limit}
response       : [
  {
    makanan_id
    ...atr lainnya
  }
]
```

<h5>get one</h5>

```
Content-type   : json
Headers        : Authorization User Token
GET            : api.nutripal.site/favorite/:id
body           : None
response       : [
  {
    makanan_id
    ...atr lainnya
  }


]
```
<h5>Search makanan</h5>

```
Content-type   : json
GET            : api.nutripal.site/cari/makanan?keyword=xxx
- xxx adalah query keyword
body           : None
response       : [
  {
    makanan_id
    ...atr lainnya
  }
```
  
<h3>Jadwal Praktik</h3>
<h5>get all pages</h5>

```
Content-type   : json
body           : {pages,limit}
response       : [
  {
    hari : string
    mulai : string (hh:mm:ss) atau (hh:mm)
    akhir : string (hh:mm:ss) atau (hh:mm)
    dokter_id : number
  }
]
```

<h5>get one</h5>

```
Content-type   : json
GET            : api.nutripal.site/jadwal-praktik/:id
body           : {pages,limit}
response       : 
  {
    hari : string
    mulai : string (hh:mm:ss) atau (hh:mm)
    akhir : string (hh:mm:ss) atau (hh:mm)
    dokter_id : number
  }
on error      : 404 jadwal not found
```

<h5>hapus jadwal</h5>

```
Content-type   : json
Headers        : Authorization Admin Token
DELETE         : api.nutripal.site/jadwal-praktik/:id
body           : {pages,limit}
response       : succsefull message
on error       : 404 jadwal not found
```

<h5>Update jadwal</h5>

```
Content-type   : json
Headers        : Authorization Admin Token
PUT            : api.nutripal.site/jadwal-praktik/:id
body           : None
response       : 
  {
    hari : string
    mulai : string (hh:mm:ss) atau (hh:mm)
    akhir : string (hh:mm:ss) atau (hh:mm)
    dokter_id : number
  }
on error      : 404 jadwal not found
```


<h5>create jadwal</h5>

```
Content-type   : json
Headers        : Authorization Admin Token
POST           : api.nutripal.site/jadwal-praktik/
body           : 
  {
    hari : string
    mulai : string (hh:mm:ss) atau (hh:mm)
    akhir : string (hh:mm:ss) atau (hh:mm)
    dokter_id : number
  }
response      : succsessful message 
on error      : None
```

<h3>Data Rekam Medis</h3>
<h5>get all pages</h5>

```
Content-type   : json
Headers        : Authorization User/Admin
GET            : api.nutripal.site/data-rekam-medis
body           : {pages,limit}
response       : [
  {
    data_rekam_id
    ...atr lainnya
  }
]
on error      : 401 not login or not have access 
```
<h5>get one </h5>

```
Content-type   : json
Headers        : Authorization User/Admin
GET            : api.nutripal.site/data-rekam-medis/:id
body           : {pages,limit}
response       : 
  {
    data_rekam_id
    ...atr lainnya
  }
on error      : 401 not login or not have access
```

<h5>buat rekam medis</h5>

```
Content-type   : json
Headers        : Authorization Admin
GET            : api.nutripal.site/data-rekam-medis
body           : {
  tanggal_periksa: Date,
  keluhan: string,
  dokter_id : number,
  user_id : string,
  diagnosa : string 
  
}
response       : 
  {
    data_rekam_id
    ...atr lainnya
  }
on error      : 401 not login or not have access
```


<h5>update rekam medis</h5>

```
Content-type   : json
Headers        : Authorization Admin
PUT            : api.nutripal.site/data-rekam-medis/:id
body           : {
  user_id : string,
  dokter_id : number,
  tanggal_periksa:date,
  keluhan :string,
  diagnosa :string,  
}
response       : message berhasil di update
on error      : 403 not login or not have access
```

<h3>Data Dashboard<h3>
<h5>get dashboard data</h5>

```
Content-type   : json
Headers        : Authorization Admin
PUT            : api.nutripal.site/dashboard/:
body           : None
response       : 
{
  "total_layanan",
  "total_data_rekam_medis",
  "total_makanan",
  "total_dokter",
  "total_poliklinik",
  "total_pasien"
}
```

<h3> User <h3>
<h5>get all user</h5>

```
Content-type   : json
Headers        : Authorization Admin
GET            : api.nutripal.site/user/
body           : {pages,limit}
response       : [
  {
    user_id : string,
    ...attr lainnya user
  }
]
```

<h5>get one</h5>

```
Content-type   : json
Headers        : Authorization Admin
GET            : api.nutripal.site/user/:id
body           : None
response       : 
  {
    user_id : string,
    ...attr lainnya user
  }

```

<h5>update by user</h5>

```
Content-type   : json
Headers        : Authorization user
PUT            : api.nutripal.site/user
body           : 
  {
    user_id : string,
    ...attr lainnya user
  }

response       : succesfull message
```

<h5>update by Admin</h5>

```
Content-type   : json
Headers        : Authorization Admin
PUT            : api.nutripal.site/user/:id:
body           : 
  {
    user_id : string,
    ...attr lainnya user
  }

response       : succesfull message
on error       : 404 User not found
```

<h5>delete user</h5>

```
Content-type   : json
Headers        : Authorization Admin
DELETE         : api.nutripal.site/user/:id:
body           : None
response       : succesfull message
on error       : 404 User not found
```

<h5>Search user/patient</h5>

```
Content-type   : json
Headers        : Authorization Admin
GET            : api.nutripal.site/cari/user?keword=xxxxx
- xxxx = adalah kata kunci
body           : None
response       : [
  {
    user_id,
    ...attr user lainnya
  }
]
on error       : 404 User not found
```
