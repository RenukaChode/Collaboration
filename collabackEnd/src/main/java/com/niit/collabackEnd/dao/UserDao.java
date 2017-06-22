package com.niit.collabackEnd.dao;

import java.util.List;

import com.niit.collabackEnd.model.User;


public interface UserDao 
{
	public User get(String id);
	public void save(User u);
	public void update(User u);
	public List<User> list();
	public boolean validate(String id,String password);


}