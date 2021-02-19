---
id: https-basics
title: HTTPS 协议基础
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 前后端交互之 HTTPS 协议。HTTPS协议简明概述。
slug: ../https-basics
keywords:
  - network
  - http
  - https
  - 网络
  - 网络协议
  - http协议
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=286354956&bvid=BV1Ef4y1R7FW&cid=211589837&page=1" bsrc="https://www.bilibili.com/video/BV1Ef4y1R7FW/"/>

HTTPS 是在 HTTP 的基础上，提供了对数据加密的支持，保证了数据私密性、完整性，并且可以用来认证客户端和服务器身份。

## 为什么安全

在普通 HTTP 协议中，数据是明文传输的，很容易有中间人窃听数据，并对客户端把自己伪装成服务器，对服务器把自己伪装为客户端，进而非法获取通信数据。而在 HTTPS 中，数据是加密传输的，利用了非对称公钥加密机制，既能保证数据不被篡改，又能认证通信双方身份，基本避免了中间人攻击。

## TLS 与握手机制

HTTPS 通信的加密是使用 TLS 协议实现的。在客户端和服务器正常通信之前，会有一个握手过程。这里以浏览器访问 HTTPS 网站、且HTTPS 网站服务器提供单向认证为例来描述一下握手过程。（注意，握手过程根据 Key 交换算法的不同而不同，比如 RSA、Diffie Hellman，这里以 RSA 为例）

- 首先浏览器发起 **clientHello** 消息，包含支持的 TLS 版本，加密算法集(Cipher Suite)，以及随机数。
- 服务器发送 1) **ServerHello** 消息，包含所选择的双方共同支持的 TLS 版本，加密算法集和另一个随机数，2) 然后发送 **Certificate** 消息，附加服务器的证书。3) 最后发送 **ServerHelloDone** 消息
- 浏览器接收消息后验证服务器证书是否为受信任的证书机构(CA)签发的，是否是真实的服务器（认证），之后使用证书附带的公钥生成 **premaster secret，** 作为**ClientKeyExchange** 消息体发送给服务器
- 服务器收到后使用私钥解密 **premaster secret**
- 随后浏览器和服务器使用 **premaster secret** 和之前生成的服务器+浏览器全部随机数生成相同的 **master key**，用于加密和解密后续所有的通信
- 浏览器 1) 发送 **ChangeCipherSpec** 消息 2) 然后发送使用master key 加密的 **finished** 消息
- 服务器接收并验证，然后同样给浏览器发送 **ChangeCipherSpec** 消息和使用 master key 加密的 **finished** 消息，浏览器接收并验证
- 握手完成

好了，这个就是 HTTPS 通信原理与 TLS 握手机制，如果觉得视频有帮助请三连并关注，我是峰华，感谢观看！