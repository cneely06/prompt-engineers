import datetime
import uuid
from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey, JSON, String
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()

class Chat(Base):
    __tablename__ = 'chats'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(Integer, nullable=False)
    organization_id = Column(Integer, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.now)
    updated_at = Column(DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)
    deleted_at = Column(DateTime, nullable=True)

    # Relationship to messages
    messages = relationship('Message', back_populates='chat', passive_deletes=True, cascade="all, delete, delete-orphan")

    def soft_delete(self):
        self.deleted_at = datetime.datetime.now()
        for message in self.messages:
            message.soft_delete()
            
class Message(Base):
    __tablename__ = 'messages'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    chat_id = Column(String(36), ForeignKey('chats.id', ondelete='SET NULL'), nullable=True)
    role = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.now)
    deleted_at = Column(DateTime, nullable=True)

    # Relationship to chat
    chat = relationship("Chat", back_populates="messages")
    sources = relationship("Source", back_populates="message")
    images = relationship("Image", back_populates="message")

    def soft_delete(self):
        self.deleted_at = datetime.datetime.now()
            
class Index(Base):
    __tablename__ = 'indexes'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(Integer, nullable=False)
    organization_id = Column(Integer, nullable=True)
    index_name = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.now)
    updated_at = Column(DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)
    deleted_at = Column(DateTime, nullable=True)
    sources = relationship('Source', back_populates='index')
    
    def soft_delete(self):
        self.deleted_at = datetime.datetime.now()
        for source in self.sources:
            source.soft_delete()
        
class Image(Base):
    __tablename__ = 'images'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    message_id = Column(String(36), ForeignKey('messages.id', ondelete='CASCADE'), nullable=False)
    content = Column(Text, nullable=False)
    message = relationship("Message", back_populates="images")

class Source(Base):
    __tablename__ = 'sources'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(Integer, nullable=False)
    organization_id = Column(Integer, nullable=True)
    message_id = Column(String(36), ForeignKey('messages.id', ondelete='CASCADE'), nullable=False)
    index_id = Column(String(36), ForeignKey('indexes.id', ondelete='CASCADE'), nullable=False)
    type = Column(String(50), nullable=False)
    name = Column(Text, nullable=True)
    src = Column(JSON, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.now)
    updated_at = Column(DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)
    deleted_at = Column(DateTime, nullable=True)
    message = relationship('Message', back_populates='sources')
    index = relationship('Index', back_populates='sources')