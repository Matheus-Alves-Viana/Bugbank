package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)	
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-reports"},
		features = "src/test/resources/features",
		glue = "stepsDefinitions",
		tags = "@rodaTudo",
		snippets = SnippetType.CAMELCASE,
		monochrome = true,
		dryRun = false
		)

public class RunnerTest {

	
	
}
