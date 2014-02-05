var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  // hack to have multiline string in javascript
  // see http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
  var initSql = function(){/*
--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: attachment; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE attachment (
    "fileId" integer,
    "projectId" integer,
    "taskId" integer,
    "userId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.attachment OWNER TO midas;

--
-- Name: attachment_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE attachment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attachment_id_seq OWNER TO midas;

--
-- Name: attachment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE attachment_id_seq OWNED BY attachment.id;


--
-- Name: comment; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE comment (
    topic boolean,
    "projectId" integer,
    "taskId" integer,
    "parentId" integer,
    "userId" integer,
    value text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.comment OWNER TO midas;

--
-- Name: comment_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_id_seq OWNER TO midas;

--
-- Name: comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE comment_id_seq OWNED BY comment.id;


--
-- Name: delivery; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE delivery (
    "notificationId" integer,
    "deliveryDate" timestamp with time zone,
    "deliveryType" text,
    content text,
    "isDelivered" boolean,
    "isActive" boolean,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.delivery OWNER TO midas;

--
-- Name: delivery_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE delivery_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.delivery_id_seq OWNER TO midas;

--
-- Name: delivery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE delivery_id_seq OWNED BY delivery.id;


--
-- Name: event; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE event (
    status text,
    uuid text,
    title text,
    description text,
    start timestamp with time zone,
    "end" timestamp with time zone,
    location text,
    "userId" integer,
    "projectId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.event OWNER TO midas;

--
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE event_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.event_id_seq OWNER TO midas;

--
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE event_id_seq OWNED BY event.id;


--
-- Name: eventrsvp; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE eventrsvp (
    "eventId" integer,
    "userId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.eventrsvp OWNER TO midas;

--
-- Name: eventrsvp_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE eventrsvp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.eventrsvp_id_seq OWNER TO midas;

--
-- Name: eventrsvp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE eventrsvp_id_seq OWNED BY eventrsvp.id;


--
-- Name: file; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE file (
    "userId" integer,
    name text,
    "isPrivate" boolean,
    "mimeType" text,
    size integer,
    data bytea,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.file OWNER TO midas;

--
-- Name: file_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE file_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.file_id_seq OWNER TO midas;

--
-- Name: file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE file_id_seq OWNED BY file.id;


--
-- Name: like; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE "like" (
    "projectId" integer,
    "taskId" integer,
    "targetId" integer,
    "userId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public."like" OWNER TO midas;

--
-- Name: like_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE like_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.like_id_seq OWNER TO midas;

--
-- Name: like_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE like_id_seq OWNED BY "like".id;


--
-- Name: midas_user; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE midas_user (
    username text,
    name text,
    title text,
    bio text,
    "photoId" integer,
    "photoUrl" text,
    "isAdmin" boolean,
    disabled boolean,
    "passwordAttempts" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.midas_user OWNER TO midas;

--
-- Name: midas_user_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE midas_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.midas_user_id_seq OWNER TO midas;

--
-- Name: midas_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE midas_user_id_seq OWNED BY midas_user.id;


--
-- Name: notification; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE notification (
    "callerId" integer,
    "callerType" text,
    "triggerGuid" text,
    action text,
    audience text,
    "recipientId" integer,
    "createdDate" timestamp with time zone,
    "localParams" text,
    "globalParams" text,
    "isActive" boolean,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.notification OWNER TO midas;

--
-- Name: notification_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE notification_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.notification_id_seq OWNER TO midas;

--
-- Name: notification_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE notification_id_seq OWNED BY notification.id;


--
-- Name: project; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE project (
    state text,
    title text,
    description text,
    "coverId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.project OWNER TO midas;

--
-- Name: project_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE project_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_id_seq OWNER TO midas;

--
-- Name: project_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE project_id_seq OWNED BY project.id;


--
-- Name: projectowner; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE projectowner (
    "projectId" integer,
    "userId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.projectowner OWNER TO midas;

--
-- Name: projectowner_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE projectowner_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projectowner_id_seq OWNER TO midas;

--
-- Name: projectowner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE projectowner_id_seq OWNED BY projectowner.id;


--
-- Name: projectparticipant; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE projectparticipant (
    "projectId" integer,
    "userId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.projectparticipant OWNER TO midas;

--
-- Name: projectparticipant_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE projectparticipant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projectparticipant_id_seq OWNER TO midas;

--
-- Name: projectparticipant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE projectparticipant_id_seq OWNED BY projectparticipant.id;


--
-- Name: projecttag; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE projecttag (
    "projectId" integer,
    "tagId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.projecttag OWNER TO midas;

--
-- Name: projecttag_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE projecttag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projecttag_id_seq OWNER TO midas;

--
-- Name: projecttag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE projecttag_id_seq OWNED BY projecttag.id;


--
-- Name: tag; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE tag (
    "projectId" integer,
    "taskId" integer,
    "tagId" integer,
    "userId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.tag OWNER TO midas;

--
-- Name: tag_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE tag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tag_id_seq OWNER TO midas;

--
-- Name: tag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE tag_id_seq OWNED BY tag.id;


--
-- Name: tagentity; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE tagentity (
    type text,
    name text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.tagentity OWNER TO midas;

--
-- Name: tagentity_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE tagentity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tagentity_id_seq OWNER TO midas;

--
-- Name: tagentity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE tagentity_id_seq OWNED BY tagentity.id;


--
-- Name: task; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE task (
    state text,
    "userId" integer,
    "projectId" integer,
    title text,
    description text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.task OWNER TO midas;

--
-- Name: task_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE task_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.task_id_seq OWNER TO midas;

--
-- Name: task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE task_id_seq OWNED BY task.id;


--
-- Name: userauth; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE userauth (
    "userId" integer,
    provider text,
    "providerId" text,
    "accessToken" text,
    "refreshToken" text,
    "refreshTime" timestamp with time zone,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.userauth OWNER TO midas;

--
-- Name: userauth_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE userauth_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.userauth_id_seq OWNER TO midas;

--
-- Name: userauth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE userauth_id_seq OWNED BY userauth.id;


--
-- Name: useremail; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE useremail (
    "userId" integer,
    email text,
    "isPrimary" boolean,
    "isVerified" boolean,
    token text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.useremail OWNER TO midas;

--
-- Name: useremail_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE useremail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.useremail_id_seq OWNER TO midas;

--
-- Name: useremail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE useremail_id_seq OWNED BY useremail.id;


--
-- Name: usernotification; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE usernotification (
    "userId" integer,
    "notificationId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.usernotification OWNER TO midas;

--
-- Name: usernotification_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE usernotification_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usernotification_id_seq OWNER TO midas;

--
-- Name: usernotification_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE usernotification_id_seq OWNED BY usernotification.id;


--
-- Name: userpassword; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE userpassword (
    "userId" integer,
    password text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.userpassword OWNER TO midas;

--
-- Name: userpassword_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE userpassword_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.userpassword_id_seq OWNER TO midas;

--
-- Name: userpassword_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE userpassword_id_seq OWNED BY userpassword.id;


--
-- Name: userpasswordreset; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE userpasswordreset (
    "userId" integer,
    token text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.userpasswordreset OWNER TO midas;

--
-- Name: userpasswordreset_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE userpasswordreset_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.userpasswordreset_id_seq OWNER TO midas;

--
-- Name: userpasswordreset_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE userpasswordreset_id_seq OWNED BY userpasswordreset.id;


--
-- Name: usersetting; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE usersetting (
    "userId" integer,
    context text,
    key text,
    value text,
    "isActive" boolean,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.usersetting OWNER TO midas;

--
-- Name: usersetting_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE usersetting_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usersetting_id_seq OWNER TO midas;

--
-- Name: usersetting_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE usersetting_id_seq OWNED BY usersetting.id;


--
-- Name: volunteer; Type: TABLE; Schema: public; Owner: midas; Tablespace: 
--

CREATE TABLE volunteer (
    "taskId" integer,
    "userId" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "deletedAt" timestamp with time zone
);


ALTER TABLE public.volunteer OWNER TO midas;

--
-- Name: volunteer_id_seq; Type: SEQUENCE; Schema: public; Owner: midas
--

CREATE SEQUENCE volunteer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.volunteer_id_seq OWNER TO midas;

--
-- Name: volunteer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: midas
--

ALTER SEQUENCE volunteer_id_seq OWNED BY volunteer.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY attachment ALTER COLUMN id SET DEFAULT nextval('attachment_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY comment ALTER COLUMN id SET DEFAULT nextval('comment_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY delivery ALTER COLUMN id SET DEFAULT nextval('delivery_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY event ALTER COLUMN id SET DEFAULT nextval('event_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY eventrsvp ALTER COLUMN id SET DEFAULT nextval('eventrsvp_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY file ALTER COLUMN id SET DEFAULT nextval('file_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY "like" ALTER COLUMN id SET DEFAULT nextval('like_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY midas_user ALTER COLUMN id SET DEFAULT nextval('midas_user_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY notification ALTER COLUMN id SET DEFAULT nextval('notification_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY project ALTER COLUMN id SET DEFAULT nextval('project_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY projectowner ALTER COLUMN id SET DEFAULT nextval('projectowner_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY projectparticipant ALTER COLUMN id SET DEFAULT nextval('projectparticipant_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY projecttag ALTER COLUMN id SET DEFAULT nextval('projecttag_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY tag ALTER COLUMN id SET DEFAULT nextval('tag_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY tagentity ALTER COLUMN id SET DEFAULT nextval('tagentity_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY task ALTER COLUMN id SET DEFAULT nextval('task_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY userauth ALTER COLUMN id SET DEFAULT nextval('userauth_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY useremail ALTER COLUMN id SET DEFAULT nextval('useremail_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY usernotification ALTER COLUMN id SET DEFAULT nextval('usernotification_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY userpassword ALTER COLUMN id SET DEFAULT nextval('userpassword_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY userpasswordreset ALTER COLUMN id SET DEFAULT nextval('userpasswordreset_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY usersetting ALTER COLUMN id SET DEFAULT nextval('usersetting_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: midas
--

ALTER TABLE ONLY volunteer ALTER COLUMN id SET DEFAULT nextval('volunteer_id_seq'::regclass);


--
-- Name: attachment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('attachment_id_seq', 1, false);


--
-- Name: comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('comment_id_seq', 1, false);


--
-- Name: delivery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('delivery_id_seq', 1, false);


--
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('event_id_seq', 1, false);


--
-- Name: eventrsvp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('eventrsvp_id_seq', 1, false);


--
-- Name: file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('file_id_seq', 1, false);


--
-- Name: like_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('like_id_seq', 1, false);


--
-- Name: midas_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('midas_user_id_seq', 1, false);


--
-- Name: notification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('notification_id_seq', 1, false);


--
-- Name: project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('project_id_seq', 1, false);


--
-- Name: projectowner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('projectowner_id_seq', 1, false);


--
-- Name: projectparticipant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('projectparticipant_id_seq', 1, false);


--
-- Name: projecttag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('projecttag_id_seq', 1, false);


--
-- Name: tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('tag_id_seq', 1, false);


--
-- Name: tagentity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('tagentity_id_seq', 1, false);


--
-- Name: task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('task_id_seq', 1, false);


--
-- Name: userauth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('userauth_id_seq', 1, false);


--
-- Name: useremail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('useremail_id_seq', 1, false);


--
-- Name: usernotification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('usernotification_id_seq', 1, false);


--
-- Name: userpassword_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('userpassword_id_seq', 1, false);


--
-- Name: userpasswordreset_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('userpasswordreset_id_seq', 1, false);


--
-- Name: usersetting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('usersetting_id_seq', 1, false);


--
-- Name: volunteer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: midas
--

SELECT pg_catalog.setval('volunteer_id_seq', 1, false);


--
-- Name: attachment_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY attachment
    ADD CONSTRAINT attachment_pkey PRIMARY KEY (id);


--
-- Name: comment_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);


--
-- Name: delivery_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY (id);


--
-- Name: event_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- Name: eventrsvp_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY eventrsvp
    ADD CONSTRAINT eventrsvp_pkey PRIMARY KEY (id);


--
-- Name: file_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY file
    ADD CONSTRAINT file_pkey PRIMARY KEY (id);


--
-- Name: like_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY "like"
    ADD CONSTRAINT like_pkey PRIMARY KEY (id);


--
-- Name: midas_user_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY midas_user
    ADD CONSTRAINT midas_user_pkey PRIMARY KEY (id);


--
-- Name: notification_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY notification
    ADD CONSTRAINT notification_pkey PRIMARY KEY (id);


--
-- Name: project_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY project
    ADD CONSTRAINT project_pkey PRIMARY KEY (id);


--
-- Name: projectowner_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY projectowner
    ADD CONSTRAINT projectowner_pkey PRIMARY KEY (id);


--
-- Name: projectparticipant_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY projectparticipant
    ADD CONSTRAINT projectparticipant_pkey PRIMARY KEY (id);


--
-- Name: projecttag_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY projecttag
    ADD CONSTRAINT projecttag_pkey PRIMARY KEY (id);


--
-- Name: tag_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);


--
-- Name: tagentity_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY tagentity
    ADD CONSTRAINT tagentity_pkey PRIMARY KEY (id);


--
-- Name: task_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY task
    ADD CONSTRAINT task_pkey PRIMARY KEY (id);


--
-- Name: userauth_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY userauth
    ADD CONSTRAINT userauth_pkey PRIMARY KEY (id);


--
-- Name: useremail_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY useremail
    ADD CONSTRAINT useremail_pkey PRIMARY KEY (id);


--
-- Name: usernotification_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY usernotification
    ADD CONSTRAINT usernotification_pkey PRIMARY KEY (id);


--
-- Name: userpassword_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY userpassword
    ADD CONSTRAINT userpassword_pkey PRIMARY KEY (id);


--
-- Name: userpasswordreset_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY userpasswordreset
    ADD CONSTRAINT userpasswordreset_pkey PRIMARY KEY (id);


--
-- Name: usersetting_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY usersetting
    ADD CONSTRAINT usersetting_pkey PRIMARY KEY (id);


--
-- Name: volunteer_pkey; Type: CONSTRAINT; Schema: public; Owner: midas; Tablespace: 
--

ALTER TABLE ONLY volunteer
    ADD CONSTRAINT volunteer_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
*/}.toString().slice(14,-3);
  // console.log(initSql);
  db.runSql(initSql, callback);
};

exports.down = function(db, callback) {
  var cleanSql = function(){/*
DROP TABLE attachment;
DROP TABLE comment;
DROP TABLE delivery;
DROP TABLE event;
DROP TABLE eventrsvp;
DROP TABLE file;
DROP TABLE "like";
DROP TABLE midas_user;
DROP TABLE notification;
DROP TABLE project;
DROP TABLE projectowner;
DROP TABLE projectparticipant;
DROP TABLE projecttag;
DROP TABLE tag;
DROP TABLE tagentity;
DROP TABLE task;
DROP TABLE userauth;
DROP TABLE useremail;
DROP TABLE usernotification;
DROP TABLE userpassword;
DROP TABLE userpasswordreset;
DROP TABLE usersetting;
DROP TABLE volunteer;
*/}.toString().slice(14,-3);
  db.runSql(cleanSql, callback);
};
