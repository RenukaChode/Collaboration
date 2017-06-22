package com.niit.collabackEnd.dao;

import java.util.List;

import com.niit.collabackEnd.model.Blog;

public interface BlogDao
{
	public boolean save(Blog blog);
	
	public boolean update(Blog blog);
	
	public boolean delete(String id);
	
	public List<Blog> list();
	
	public Blog get(String id);

}