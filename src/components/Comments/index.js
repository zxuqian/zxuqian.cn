import React, { useEffect, useState } from "react";
import Button from "../Button";
import {
  StyledComments,
  StyledCommentItem,
  Avatar,
  NickName,
  Time,
  Content,
} from "./styles";

function Comments({ activityId, oid, bvid }) {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState({});

  let url = "";
  let type = "11";
  if (activityId) {
    url = `https://t.bilibili.com/${activityId}?tab=2`;
  }
  if (bvid) {
    type = "1";
    url = `https://www.bilibili.com/video/${bvid}`;
  }

  const getComments = async () => {
    if (!oid) {
      return;
    }
    const res = await fetch(
      `https://api.zxuqian.cn/comments?type=${type}&oid=${oid}&sort=1`
    );
    const data = await res.json();
    setComments(data.replies || []);
    setPage(data.page || {});
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <StyledComments>
      <Button isLink href={url} style={{ width: "max-content" }}>
        去 B 站发表评论
      </Button>
      <p>评论数据来自 Bilibili 相关动态和视频</p>
      {comments.map((comment) => {
        const { member, ctime, content, replies } = comment;
        return (
          <React.Fragment key={comment.rpid}>
            <CommentItem
              key={comment.rpid}
              member={member}
              ctime={ctime}
              content={content}
              replies={replies}
            />
            {replies &&
              replies.map((reply) => {
                return (
                  <CommentItem
                    key={reply.rpid}
                    isReply
                    member={reply.member}
                    ctime={reply.ctime}
                    content={reply.content}
                    replies={reply.replies}
                  />
                );
              })}
          </React.Fragment>
        );
      })}
      {page && page.acount >= 20 && (
        <a href={url}>只显示前 20 条，更多评论到 B 站查看</a>
      )}
    </StyledComments>
  );
}

function CommentItem({ isReply = false, member, ctime, content }) {
  const replyDate = new Date(0);
  replyDate.setUTCSeconds(ctime);
  return (
    <StyledCommentItem isReply={isReply}>
      <Avatar src={member.avatar} referrerPolicy="no-referrer" />
      <NickName>{member.uname}</NickName>
      <Time>
        {replyDate.getFullYear()} 年 {replyDate.getMonth() + 1} 月
        {replyDate.getDate()} 日
      </Time>
      <Content>{content.message}</Content>
    </StyledCommentItem>
  );
}

export default Comments;
