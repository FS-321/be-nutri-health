# NutriHealth web service

<h3>Login</h3>

```
content-type  : json
POST          : api.nutripal.site/login
body          : {email, password}
response      : {message gagal atau berhasil}
```

<h3>Register</h3>

```
Content-type   : json
POST           : api.nutripal.site/register
body           : {email,nama_depan,nama_belakang,password,tanggal_lahir}
tanggal lahir date "tahun-bulan-tgl"
ex             : "2001-03-31"
response      : {message gagal atau berhasil}
```

<h3>Poliklinik</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET           : api.nutripal.site/poliklinik
body           : {pages,limit}
response      : [
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
GET           : api.nutripal.site/poliklinik/:id
body           : None
response      : 
  {
    poli_id
    ...atr lainnya
    dokter : [ ]
  }
```

<h3>dokter</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET           : api.nutripal.site/dokter
body           : {pages,limit}
response      : [
  {
    dokter_id
    ...atr lainnya
    jadwal : [ ]
  }
]
```
<h5>get one</h5>

```
Content-type   : json
GET           : api.nutripal.site/dokter/:id
body           : None
response      : 
  {
    dokter_id
    ...atr lainnya
    jadwal : [ ]
  }
```

<h3>makanan</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET           : api.nutripal.site/makanan
body           : {pages,limit}
response      : [
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

# NutriHealth web service

<h3>Login</h3>

```
content-type  : json
POST          : api.nutripal.site/login
body          : {email, password}
response      : {message gagal atau berhasil}
```

<h3>Register</h3>

```
Content-type   : json
POST           : api.nutripal.site/register
body           : {email,nama_depan,nama_belakang,password,tanggal_lahir}
tanggal lahir date "tahun-bulan-tgl"
ex             : "2001-03-31"
response      : {message gagal atau berhasil}
```

<h3>Poliklinik</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET           : api.nutripal.site/poliklinik
body           : {pages,limit}
response      : [
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
GET           : api.nutripal.site/poliklinik/:id
body           : None
response      : 
  {
    poli_id
    ...atr lainnya
    dokter : [ ]
  }
```

<h3>dokter</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET           : api.nutripal.site/dokter
body           : {pages,limit}
response      : [
  {
    dokter_id
    ...atr lainnya
    jadwal : [ ]
  }
]
```
<h5>get one</h5>

```
Content-type   : json
GET           : api.nutripal.site/dokter/:id
body           : None
response      : 
  {
    dokter_id
    ...atr lainnya
    jadwal : [ ]
  }
```

<h3>layanan</h3>
<h5>get all pages</h5>

```
Content-type   : json
GET            : api.nutripal.site/layanan
body           : {pages,limit}
response       : [
  {
    layanan_id,
    ...atr lainnya,
    nama_dokter : []
  }
]
```
<h5>get one</h5>

```
Content-type   : json
GET           : api.nutripal.site/layanan/:id
body           : None
response       : 
  {
    layanan_id,
    ...atr lainnya,
    nama_dokter : []
  }

```
