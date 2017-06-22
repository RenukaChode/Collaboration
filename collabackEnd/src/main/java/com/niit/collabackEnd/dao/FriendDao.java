package com.niit.collabackEnd.dao;

import java.util.List;

import com.niit.collabackEnd.model.Friend;
import com.niit.collabackEnd.model.User;


public interface FriendDao {
	
	public Friend getId(String id);
	public void save(Friend f);
	public void update(Friend f);
	public List<Friend> list();
	public Friend get(User id);
	public Friend get(Friend id);
	
}
