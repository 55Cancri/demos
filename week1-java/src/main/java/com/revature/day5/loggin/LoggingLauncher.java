package com.revature.day5.loggin;

import org.apache.log4j.Logger;

public class LoggingLauncher {
	private static Logger log = Logger.getRootLogger();

	public static void main(String[] args) {
		log.trace("This is a trace log");
		log.debug("This is a debug log");
		log.info("This is an info log");
		log.warn("This is a warn log");
		log.error("This is an error log");
		log.fatal("This is a fatal log");
	}
}
