Hah, you might think! Got their secret crypto just by doing a simple search
on Github, Google, or whatever! But don't start celebrating just yet. There
is nothing interesting to see here. These certificates and keys are not used
in any publicly available application. They are for local testing purposes
only. Have fun using them in your application as well :)

All passwords - for the CA and for the client - are 'password'.

They have been generated using the in-depth guide here, with one change:

* https://jamielinux.com/docs/openssl-certificate-authority/

The client key (client.key) used by DB4S was generated using DES3 (-des3)
instead of AES256 (-aes256), because the Qt layer complained otherwise. ;)

The .crt files can be viewed using OpenSSL:

    $ openssl x509 -noout -text -in [filename]

For eample:

```
$ openssl x509 -noout -text -in server.crt 
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 4104 (0x1008)
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=GB, ST=England, O=Alice Ltd, CN=Alice Ltd Intermediate CA
        Validity
            Not Before: Oct 26 21:39:27 2016 GMT
            Not After : Nov  5 21:39:27 2017 GMT
        Subject: C=GB, ST=England, O=DB Browser for SQLite, CN=localhost/emailAddress=db4s-dev@sqlitebrowser.org
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:b1:6e:07:a5:3d:e8:7d:21:bf:c2:2e:4e:7c:b4:
                    df:48:df:5d:d3:3c:06:fb:a4:0e:ec:05:94:f2:0c:
                    c7:82:9a:ee:fe:39:ff:79:88:b9:ec:c5:97:bf:49:
                    29:68:ad:2a:ac:28:a4:ea:11:58:c6:bb:e0:6f:94:
                    ce:71:36:69:fe:92:62:03:2d:8d:d5:a9:ce:1c:db:
                    60:56:06:5a:73:c2:9c:1c:b7:b8:6d:c8:48:85:59:
                    ed:f1:f8:8c:f7:e9:2c:ee:82:9c:06:4d:0e:8e:55:
                    f7:cb:63:c6:0e:86:24:0e:75:c4:f9:01:93:42:51:
                    5c:3f:8e:1a:f7:39:3b:7f:f7:d9:72:42:6a:84:ab:
                    cb:42:79:98:38:8d:69:dd:d1:a9:a5:97:8d:b9:e4:
                    db:1f:26:bc:14:c3:ce:79:dc:b8:f3:9f:a0:98:cf:
                    e8:b8:57:2a:b1:74:f0:c7:51:a7:7c:19:cb:7e:f6:
                    76:fd:3b:3a:ac:af:1f:d8:38:ef:46:55:66:bd:e1:
                    6b:9a:b2:8f:2e:ef:b4:58:5a:42:43:94:28:84:92:
                    a2:c8:14:9d:b1:b7:19:cf:1a:bd:03:6c:99:12:2a:
                    aa:09:66:19:b1:68:49:63:37:a3:1c:cf:a0:6c:6f:
                    6e:de:43:77:fd:f7:10:51:03:0e:b3:f8:20:6b:71:
                    04:21
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            Netscape Cert Type: 
                SSL Server
            Netscape Comment: 
                OpenSSL Generated Server Certificate
            X509v3 Subject Key Identifier: 
                D2:C7:A8:CA:19:8D:BA:50:C0:04:97:87:04:D7:C7:E7:51:86:90:47
            X509v3 Authority Key Identifier: 
                keyid:53:36:5D:B5:46:18:86:BA:2B:3F:C5:31:D7:87:DB:67:15:C5:2D:68
                DirName:/C=GB/ST=England/O=Alice Ltd/OU=Alice Ltd Certificate Authority/CN=Alice Ltd Root CA
                serial:10:00

            X509v3 Key Usage: critical
                Digital Signature, Key Encipherment
            X509v3 Extended Key Usage: 
                TLS Web Server Authentication
    Signature Algorithm: sha256WithRSAEncryption
         b5:6f:1e:5d:8a:c8:97:53:0a:75:5e:87:d4:03:5a:2a:e2:ee:
         44:99:f8:13:16:02:fa:44:18:46:db:37:83:ad:f2:b9:fc:e7:
         75:96:ea:c1:70:e2:76:c9:1e:5d:9a:8b:28:70:4b:99:fa:d3:
         09:ab:40:da:b4:53:b3:7e:ef:3f:5b:5a:fc:49:7a:d2:f9:33:
         6d:3d:99:a3:64:12:29:df:19:45:4c:d5:f7:ca:24:de:a4:de:
         cd:9f:a0:bf:7d:f1:6e:fb:99:15:4b:6d:e5:0b:7c:68:4f:e5:
         17:12:96:75:93:70:9f:32:e6:b3:6d:4d:48:93:fd:98:1b:47:
         5f:a6:37:89:be:28:12:da:c0:ff:df:7f:14:65:c0:0b:56:32:
         03:43:41:96:8d:1e:6d:70:d2:40:72:75:c5:27:b3:82:59:fe:
         f4:65:d0:6a:29:c2:ad:75:a2:55:d5:df:be:ea:77:b8:50:1c:
         8f:3a:51:31:72:6a:86:d9:84:33:16:54:81:5c:be:9c:48:e2:
         fd:e2:7c:5c:1f:7a:59:61:67:29:d9:4e:81:71:f2:a9:ca:7a:
         9a:d9:c5:af:e9:03:cf:86:6d:38:3e:d3:7e:1a:a5:b3:8a:1d:
         64:b5:39:91:b8:f2:3c:57:b3:ac:d9:10:50:32:3d:0d:f1:82:
         bb:04:4b:4c:72:33:80:52:a8:c2:c0:b4:6b:b9:d1:8f:a0:e5:
         67:5f:c9:9e:3f:62:b7:f5:3e:4f:f8:4d:12:8c:79:ea:be:e0:
         83:99:23:5f:88:b7:de:a1:41:4b:ad:97:3b:8e:24:25:85:e3:
         0b:c4:68:4b:52:bb:d4:9d:71:d0:28:79:ac:cc:4d:40:0d:a8:
         fe:7e:34:a6:9a:d9:7f:36:55:5b:c2:c2:f3:a6:cd:9c:14:a2:
         93:98:36:60:1a:96:ea:b9:56:df:62:99:ae:07:26:b5:c1:24:
         3f:21:4f:71:ff:46:23:f4:8d:69:00:14:a8:9f:4d:91:62:f7:
         68:e6:09:c3:82:93:21:73:62:14:7f:32:32:c3:62:d2:69:b4:
         2c:d8:96:66:d0:d2:1a:1c:9c:d8:76:e7:57:25:b7:f9:a9:54:
         9c:f8:3f:08:54:3e:0a:2c:5f:c3:84:70:68:52:10:3f:d4:e8:
         f0:18:43:fc:de:0e:dc:0d:0c:2e:bb:73:78:5e:10:72:e6:c4:
         b3:9f:ce:ad:51:f3:c2:e9:73:0d:99:9a:5e:4d:f4:df:fd:81:
         43:2f:92:9c:87:b3:d3:aa:1d:16:df:22:d4:fa:fd:c0:27:33:
         c9:fc:2f:7a:a7:52:86:9c:3c:ea:75:39:67:af:dc:78:43:c1:
         4e:7b:e3:1e:c3:82:a3:68
```
