# NutriHealth web service

<h3>Login</h3>

```
content-type  : json
POST          : api.nutripal.site/login
body          : {email, password}
response      : {message berhasil / gagal}
```

<h3>Register</h3>

```
Content-type   : json
POST           : api.nutripal.site/register
body           : {email,nama_depan,nama_belakang,password,tanggal_lahir}
tanggal lahir date "tahun-bulan-tgl"
ex             : "2001-03-31"
response       : {message berhasil / gagal} 
```


<h3>Poliklinik</h3>

<h5>get all by pages</h5>

```
Content-type   : json
GET            : api.nutripal.site/poliklinik
body           : {pages,limit}
response       : [
  {
    poliklinik_id:
    ...attribute lainnya
    dokter : [  ]
  }
]
```
<h5>get one </h5>

```
Content-type   : json
GET            : api.nutripal.site/poliklinik/:id
body           : none
response       : 
  {
    poliklinik_id:
    ...attribute lainnya
    dokter : [  ]
  }
```

<h3>dokter</h3>

<h5>get one </h5>

```
Content-type   : json
GET            : api.nutripal.site/dokter
body           : {pages,limit}
response       : [
  {
    dokter_id,
    ...attribute lainnya
  }
]
```

```
Content-type   : json
GET            : api.nutripal.site/dokter/:id
body           : none
response       : 
  {
    dokter_id:
    ...attribute lainnya
    dokter : [  ]
  }
```



<h3>makanan</h3>

<h5>get all by pages </h5>

```
Content-type   : json
GET            : api.nutripal.site/makanan
body           : {pages,limit}
response       : [
  {
    dokter_id,
    ...attribute lainnya
    jadwal_praktik : [ ]
  }
]
```

```
Content-type   : json
GET            : api.nutripal.site/makanan/:id
body           : none
response       : 
  {
    makanan_id:
    ...attribute lainnya
    jadwal_praktik : [ ]
  }
```

<h3>makanan</h3>

<h5>get all by pages </h5>

```
Content-type   : json
GET            : api.nutripal.site/makanan
body           : {pages,limit}
response       : [
  {
    dokter_id,
    ...attribute lainnya
  }
]
```

```
Content-type   : json
GET            : api.nutripal.site/makanan/:id
body           : none
response       : 
  {
    makanan_id:
    ...attribute lainnya

  }
```

<h3>jadwal praktik</h3>

<h5>get all by pages </h5>

```
Content-type   : json
GET            : api.nutripal.site/jadwal-praktik
body           : {pages,limit}
response       : [
  {
    jadwal_praktik_id,
    ...attribute lainnya
  }
]
```

```
Content-type   : json
GET            : api.nutripal.site/jadwal-praktik/:id
body           : none
response       : 
   {
    jadwal_praktik_id,
    ...attribute lainnya
  }
