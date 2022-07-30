package com.tjs.tjsmanager.mapper;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;



@Mapper
public interface SalesConsumerMapper {

	// 전체 성별 판매량
	List<Map<String, Object>> allGroupByConsumerGender();
	
	// 전체 나이대별 판매량
	List<Map<String, Object>> allGroupByConsumerAge();
	
	// 전체 시간대별 판매량
	List<Map<String, Object>> allGroupBySalesHour();
	
	// 특정 물품에 대한 성별 판매량
	List<Map<String, Object>> oneItemGroupByConsumerGender(Long findItemNum);
	
	// 특정 물품에 대한 나이대별 판매량
		List<Map<String, Object>> oneItemGroupByConsumerAge(Long findItemNum);
		
		// 특정 물품에 대한 시간대별 판매량
		List<Map<String, Object>> oneItemGroupBySalesHour(Long findItemNum);
	
}
