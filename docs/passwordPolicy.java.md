# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktn/provider-snowflake.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy snowflake_password_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .history(java.lang.Number)
//  .id(java.lang.String)
//  .ifNotExists(java.lang.Boolean|IResolvable)
//  .lockoutTimeMins(java.lang.Number)
//  .maxAgeDays(java.lang.Number)
//  .maxLength(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .minAgeDays(java.lang.Number)
//  .minLength(java.lang.Number)
//  .minLowerCaseChars(java.lang.Number)
//  .minNumericChars(java.lang.Number)
//  .minSpecialChars(java.lang.Number)
//  .minUpperCaseChars(java.lang.Number)
//  .orReplace(java.lang.Boolean|IResolvable)
//  .timeouts(PasswordPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database this password policy belongs to. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier for the password policy; |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.history">history</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of the most recent passwords that Snowflake stores. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lockoutTimeMins">lockoutTimeMins</a></code> | <code>java.lang.Number</code> | Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxAgeDays">maxAgeDays</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minAgeDays">minAgeDays</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of days the user must wait before a recently changed password can be changed again. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLength">minLength</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLowerCaseChars">minLowerCaseChars</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of lowercase characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minNumericChars">minNumericChars</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of numeric characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of special characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minUpperCaseChars">minUpperCaseChars</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of uppercase characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.orReplace">orReplace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) Whether to override a previous password policy with the same name. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database this password policy belongs to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier for the password policy;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema this password policy belongs to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `history`<sup>Optional</sup> <a name="history" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.history"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of the most recent passwords that Snowflake stores.

These stored passwords cannot be repeated when a user updates their password value. The current password value does not count towards the history. When you increase the history value, Snowflake saves the previous values. When you decrease the value, Snowflake saves the stored values up to that value that is set. For example, if the history value is 8 and you change the history value to 3, Snowflake stores the most recent 3 passwords and deletes the 5 older password values from the history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#history PasswordPolicy#history}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.ifNotExists"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `lockoutTimeMins`<sup>Optional</sup> <a name="lockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lockoutTimeMins"></a>

- *Type:* java.lang.Number

Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `maxAgeDays`<sup>Optional</sup> <a name="maxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxAgeDays"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the maximum number of days before the password must be changed.

A value of zero (i.e. 0) indicates that the password does not need to be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxLength"></a>

- *Type:* java.lang.Number

Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Specifies the maximum number of attempts to enter a password before being locked out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `minAgeDays`<sup>Optional</sup> <a name="minAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minAgeDays"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of days the user must wait before a recently changed password can be changed again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_age_days PasswordPolicy#min_age_days}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLength"></a>

- *Type:* java.lang.Number

Specifies the minimum number of characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `minLowerCaseChars`<sup>Optional</sup> <a name="minLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLowerCaseChars"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of lowercase characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `minNumericChars`<sup>Optional</sup> <a name="minNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minNumericChars"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of numeric characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `minSpecialChars`<sup>Optional</sup> <a name="minSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minSpecialChars"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of special characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `minUpperCaseChars`<sup>Optional</sup> <a name="minUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minUpperCaseChars"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of uppercase characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.orReplace"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#timeouts PasswordPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetHistory">resetHistory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins">resetLockoutTimeMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays">resetMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinAgeDays">resetMinAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars">resetMinLowerCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars">resetMinNumericChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars">resetMinSpecialChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars">resetMinUpperCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace">resetOrReplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts"></a>

```java
public void putTimeouts(PasswordPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment"></a>

```java
public void resetComment()
```

##### `resetHistory` <a name="resetHistory" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetHistory"></a>

```java
public void resetHistory()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists"></a>

```java
public void resetIfNotExists()
```

##### `resetLockoutTimeMins` <a name="resetLockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins"></a>

```java
public void resetLockoutTimeMins()
```

##### `resetMaxAgeDays` <a name="resetMaxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays"></a>

```java
public void resetMaxAgeDays()
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength"></a>

```java
public void resetMaxLength()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetMinAgeDays` <a name="resetMinAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinAgeDays"></a>

```java
public void resetMinAgeDays()
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength"></a>

```java
public void resetMinLength()
```

##### `resetMinLowerCaseChars` <a name="resetMinLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars"></a>

```java
public void resetMinLowerCaseChars()
```

##### `resetMinNumericChars` <a name="resetMinNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars"></a>

```java
public void resetMinNumericChars()
```

##### `resetMinSpecialChars` <a name="resetMinSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars"></a>

```java
public void resetMinSpecialChars()
```

##### `resetMinUpperCaseChars` <a name="resetMinUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars"></a>

```java
public void resetMinUpperCaseChars()
```

##### `resetOrReplace` <a name="resetOrReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace"></a>

```java
public void resetOrReplace()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PasswordPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PasswordPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PasswordPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PasswordPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList">PasswordPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList">PasswordPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference">PasswordPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.historyInput">historyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput">lockoutTimeMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput">maxAgeDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput">maxLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDaysInput">minAgeDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput">minLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput">minLowerCaseCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput">minNumericCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput">minSpecialCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput">minUpperCaseCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput">orReplaceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.history">history</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins">lockoutTimeMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays">maxAgeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDays">minAgeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars">minLowerCaseChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars">minNumericChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars">minUpperCaseChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace">orReplace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.describeOutput"></a>

```java
public PasswordPolicyDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList">PasswordPolicyDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.showOutput"></a>

```java
public PasswordPolicyShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList">PasswordPolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeouts"></a>

```java
public PasswordPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference">PasswordPolicyTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `historyInput`<sup>Optional</sup> <a name="historyInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.historyInput"></a>

```java
public java.lang.Number getHistoryInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExistsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lockoutTimeMinsInput`<sup>Optional</sup> <a name="lockoutTimeMinsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput"></a>

```java
public java.lang.Number getLockoutTimeMinsInput();
```

- *Type:* java.lang.Number

---

##### `maxAgeDaysInput`<sup>Optional</sup> <a name="maxAgeDaysInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput"></a>

```java
public java.lang.Number getMaxAgeDaysInput();
```

- *Type:* java.lang.Number

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput"></a>

```java
public java.lang.Number getMaxLengthInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `minAgeDaysInput`<sup>Optional</sup> <a name="minAgeDaysInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDaysInput"></a>

```java
public java.lang.Number getMinAgeDaysInput();
```

- *Type:* java.lang.Number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput"></a>

```java
public java.lang.Number getMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `minLowerCaseCharsInput`<sup>Optional</sup> <a name="minLowerCaseCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput"></a>

```java
public java.lang.Number getMinLowerCaseCharsInput();
```

- *Type:* java.lang.Number

---

##### `minNumericCharsInput`<sup>Optional</sup> <a name="minNumericCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput"></a>

```java
public java.lang.Number getMinNumericCharsInput();
```

- *Type:* java.lang.Number

---

##### `minSpecialCharsInput`<sup>Optional</sup> <a name="minSpecialCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput"></a>

```java
public java.lang.Number getMinSpecialCharsInput();
```

- *Type:* java.lang.Number

---

##### `minUpperCaseCharsInput`<sup>Optional</sup> <a name="minUpperCaseCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput"></a>

```java
public java.lang.Number getMinUpperCaseCharsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orReplaceInput`<sup>Optional</sup> <a name="orReplaceInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput"></a>

```java
public java.lang.Boolean|IResolvable getOrReplaceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeoutsInput"></a>

```java
public IResolvable|PasswordPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `history`<sup>Required</sup> <a name="history" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.history"></a>

```java
public java.lang.Number getHistory();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExists();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lockoutTimeMins`<sup>Required</sup> <a name="lockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins"></a>

```java
public java.lang.Number getLockoutTimeMins();
```

- *Type:* java.lang.Number

---

##### `maxAgeDays`<sup>Required</sup> <a name="maxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays"></a>

```java
public java.lang.Number getMaxAgeDays();
```

- *Type:* java.lang.Number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `minAgeDays`<sup>Required</sup> <a name="minAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDays"></a>

```java
public java.lang.Number getMinAgeDays();
```

- *Type:* java.lang.Number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

---

##### `minLowerCaseChars`<sup>Required</sup> <a name="minLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars"></a>

```java
public java.lang.Number getMinLowerCaseChars();
```

- *Type:* java.lang.Number

---

##### `minNumericChars`<sup>Required</sup> <a name="minNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars"></a>

```java
public java.lang.Number getMinNumericChars();
```

- *Type:* java.lang.Number

---

##### `minSpecialChars`<sup>Required</sup> <a name="minSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars"></a>

```java
public java.lang.Number getMinSpecialChars();
```

- *Type:* java.lang.Number

---

##### `minUpperCaseChars`<sup>Required</sup> <a name="minUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars"></a>

```java
public java.lang.Number getMinUpperCaseChars();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orReplace`<sup>Required</sup> <a name="orReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace"></a>

```java
public java.lang.Boolean|IResolvable getOrReplace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyConfig;

PasswordPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .history(java.lang.Number)
//  .id(java.lang.String)
//  .ifNotExists(java.lang.Boolean|IResolvable)
//  .lockoutTimeMins(java.lang.Number)
//  .maxAgeDays(java.lang.Number)
//  .maxLength(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .minAgeDays(java.lang.Number)
//  .minLength(java.lang.Number)
//  .minLowerCaseChars(java.lang.Number)
//  .minNumericChars(java.lang.Number)
//  .minSpecialChars(java.lang.Number)
//  .minUpperCaseChars(java.lang.Number)
//  .orReplace(java.lang.Boolean|IResolvable)
//  .timeouts(PasswordPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database this password policy belongs to. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier for the password policy; |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.history">history</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of the most recent passwords that Snowflake stores. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins">lockoutTimeMins</a></code> | <code>java.lang.Number</code> | Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays">maxAgeDays</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minAgeDays">minAgeDays</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of days the user must wait before a recently changed password can be changed again. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars">minLowerCaseChars</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of lowercase characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars">minNumericChars</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of numeric characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of special characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars">minUpperCaseChars</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of uppercase characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace">orReplace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) Whether to override a previous password policy with the same name. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database this password policy belongs to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier for the password policy;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema this password policy belongs to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `history`<sup>Optional</sup> <a name="history" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.history"></a>

```java
public java.lang.Number getHistory();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of the most recent passwords that Snowflake stores.

These stored passwords cannot be repeated when a user updates their password value. The current password value does not count towards the history. When you increase the history value, Snowflake saves the previous values. When you decrease the value, Snowflake saves the stored values up to that value that is set. For example, if the history value is 8 and you change the history value to 3, Snowflake stores the most recent 3 passwords and deletes the 5 older password values from the history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#history PasswordPolicy#history}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists"></a>

```java
public java.lang.Boolean|IResolvable getIfNotExists();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `lockoutTimeMins`<sup>Optional</sup> <a name="lockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins"></a>

```java
public java.lang.Number getLockoutTimeMins();
```

- *Type:* java.lang.Number

Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `maxAgeDays`<sup>Optional</sup> <a name="maxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays"></a>

```java
public java.lang.Number getMaxAgeDays();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the maximum number of days before the password must be changed.

A value of zero (i.e. 0) indicates that the password does not need to be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Specifies the maximum number of attempts to enter a password before being locked out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `minAgeDays`<sup>Optional</sup> <a name="minAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minAgeDays"></a>

```java
public java.lang.Number getMinAgeDays();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of days the user must wait before a recently changed password can be changed again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_age_days PasswordPolicy#min_age_days}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

Specifies the minimum number of characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `minLowerCaseChars`<sup>Optional</sup> <a name="minLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars"></a>

```java
public java.lang.Number getMinLowerCaseChars();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of lowercase characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `minNumericChars`<sup>Optional</sup> <a name="minNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars"></a>

```java
public java.lang.Number getMinNumericChars();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of numeric characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `minSpecialChars`<sup>Optional</sup> <a name="minSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars"></a>

```java
public java.lang.Number getMinSpecialChars();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of special characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `minUpperCaseChars`<sup>Optional</sup> <a name="minUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars"></a>

```java
public java.lang.Number getMinUpperCaseChars();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of uppercase characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace"></a>

```java
public java.lang.Boolean|IResolvable getOrReplace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.timeouts"></a>

```java
public PasswordPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#timeouts PasswordPolicy#timeouts}

---

### PasswordPolicyDescribeOutput <a name="PasswordPolicyDescribeOutput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyDescribeOutput;

PasswordPolicyDescribeOutput.builder()
    .build();
```


### PasswordPolicyShowOutput <a name="PasswordPolicyShowOutput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyShowOutput;

PasswordPolicyShowOutput.builder()
    .build();
```


### PasswordPolicyTimeouts <a name="PasswordPolicyTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyTimeouts;

PasswordPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#create PasswordPolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#delete PasswordPolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#read PasswordPolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#update PasswordPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#create PasswordPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#delete PasswordPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#read PasswordPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#update PasswordPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PasswordPolicyDescribeOutputList <a name="PasswordPolicyDescribeOutputList" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyDescribeOutputList;

new PasswordPolicyDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.get"></a>

```java
public PasswordPolicyDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PasswordPolicyDescribeOutputOutputReference <a name="PasswordPolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyDescribeOutputOutputReference;

new PasswordPolicyDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordHistory">passwordHistory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordLockoutTimeMins">passwordLockoutTimeMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxLength">passwordMaxLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxRetries">passwordMaxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinAgeDays">passwordMinAgeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinLowerCaseChars">passwordMinLowerCaseChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinNumericChars">passwordMinNumericChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinSpecialChars">passwordMinSpecialChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinUpperCaseChars">passwordMinUpperCaseChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutput">PasswordPolicyDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `passwordHistory`<sup>Required</sup> <a name="passwordHistory" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordHistory"></a>

```java
public java.lang.Number getPasswordHistory();
```

- *Type:* java.lang.Number

---

##### `passwordLockoutTimeMins`<sup>Required</sup> <a name="passwordLockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordLockoutTimeMins"></a>

```java
public java.lang.Number getPasswordLockoutTimeMins();
```

- *Type:* java.lang.Number

---

##### `passwordMaxAgeDays`<sup>Required</sup> <a name="passwordMaxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxAgeDays"></a>

```java
public java.lang.Number getPasswordMaxAgeDays();
```

- *Type:* java.lang.Number

---

##### `passwordMaxLength`<sup>Required</sup> <a name="passwordMaxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxLength"></a>

```java
public java.lang.Number getPasswordMaxLength();
```

- *Type:* java.lang.Number

---

##### `passwordMaxRetries`<sup>Required</sup> <a name="passwordMaxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxRetries"></a>

```java
public java.lang.Number getPasswordMaxRetries();
```

- *Type:* java.lang.Number

---

##### `passwordMinAgeDays`<sup>Required</sup> <a name="passwordMinAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinAgeDays"></a>

```java
public java.lang.Number getPasswordMinAgeDays();
```

- *Type:* java.lang.Number

---

##### `passwordMinLength`<sup>Required</sup> <a name="passwordMinLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinLength"></a>

```java
public java.lang.Number getPasswordMinLength();
```

- *Type:* java.lang.Number

---

##### `passwordMinLowerCaseChars`<sup>Required</sup> <a name="passwordMinLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinLowerCaseChars"></a>

```java
public java.lang.Number getPasswordMinLowerCaseChars();
```

- *Type:* java.lang.Number

---

##### `passwordMinNumericChars`<sup>Required</sup> <a name="passwordMinNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinNumericChars"></a>

```java
public java.lang.Number getPasswordMinNumericChars();
```

- *Type:* java.lang.Number

---

##### `passwordMinSpecialChars`<sup>Required</sup> <a name="passwordMinSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinSpecialChars"></a>

```java
public java.lang.Number getPasswordMinSpecialChars();
```

- *Type:* java.lang.Number

---

##### `passwordMinUpperCaseChars`<sup>Required</sup> <a name="passwordMinUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinUpperCaseChars"></a>

```java
public java.lang.Number getPasswordMinUpperCaseChars();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.internalValue"></a>

```java
public PasswordPolicyDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutput">PasswordPolicyDescribeOutput</a>

---


### PasswordPolicyShowOutputList <a name="PasswordPolicyShowOutputList" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyShowOutputList;

new PasswordPolicyShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.get"></a>

```java
public PasswordPolicyShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PasswordPolicyShowOutputOutputReference <a name="PasswordPolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyShowOutputOutputReference;

new PasswordPolicyShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutput">PasswordPolicyShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.internalValue"></a>

```java
public PasswordPolicyShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutput">PasswordPolicyShowOutput</a>

---


### PasswordPolicyTimeoutsOutputReference <a name="PasswordPolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.password_policy.PasswordPolicyTimeoutsOutputReference;

new PasswordPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PasswordPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---



