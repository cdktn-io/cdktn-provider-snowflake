# `sessionPolicy` Submodule <a name="`sessionPolicy` Submodule" id="@cdktn/provider-snowflake.sessionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SessionPolicy <a name="SessionPolicy" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy snowflake_session_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicy;

SessionPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .allowedSecondaryRoles(SessionPolicyAllowedSecondaryRoles)
//  .blockedSecondaryRoles(SessionPolicyBlockedSecondaryRoles)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .sessionIdleTimeoutMins(java.lang.Number)
//  .sessionUiIdleTimeoutMins(java.lang.Number)
//  .timeouts(SessionPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.allowedSecondaryRoles">allowedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | allowed_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.blockedSecondaryRoles">blockedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | blocked_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.sessionIdleTimeoutMins">sessionIdleTimeoutMins</a></code> | <code>java.lang.Number</code> | For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.sessionUiIdleTimeoutMins">sessionUiIdleTimeoutMins</a></code> | <code>java.lang.Number</code> | For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#database SessionPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#name SessionPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#schema SessionPolicy#schema}

---

##### `allowedSecondaryRoles`<sup>Optional</sup> <a name="allowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.allowedSecondaryRoles"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

allowed_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#allowed_secondary_roles SessionPolicy#allowed_secondary_roles}

---

##### `blockedSecondaryRoles`<sup>Optional</sup> <a name="blockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.blockedSecondaryRoles"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

blocked_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#blocked_secondary_roles SessionPolicy#blocked_secondary_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#comment SessionPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sessionIdleTimeoutMins`<sup>Optional</sup> <a name="sessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.sessionIdleTimeoutMins"></a>

- *Type:* java.lang.Number

For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_idle_timeout_mins SessionPolicy#session_idle_timeout_mins}

---

##### `sessionUiIdleTimeoutMins`<sup>Optional</sup> <a name="sessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.sessionUiIdleTimeoutMins"></a>

- *Type:* java.lang.Number

For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_ui_idle_timeout_mins SessionPolicy#session_ui_idle_timeout_mins}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#timeouts SessionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles">putAllowedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles">putBlockedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetAllowedSecondaryRoles">resetAllowedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetBlockedSecondaryRoles">resetBlockedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionIdleTimeoutMins">resetSessionIdleTimeoutMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionUiIdleTimeoutMins">resetSessionUiIdleTimeoutMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedSecondaryRoles` <a name="putAllowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles"></a>

```java
public void putAllowedSecondaryRoles(SessionPolicyAllowedSecondaryRoles value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

---

##### `putBlockedSecondaryRoles` <a name="putBlockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles"></a>

```java
public void putBlockedSecondaryRoles(SessionPolicyBlockedSecondaryRoles value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts"></a>

```java
public void putTimeouts(SessionPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

---

##### `resetAllowedSecondaryRoles` <a name="resetAllowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetAllowedSecondaryRoles"></a>

```java
public void resetAllowedSecondaryRoles()
```

##### `resetBlockedSecondaryRoles` <a name="resetBlockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetBlockedSecondaryRoles"></a>

```java
public void resetBlockedSecondaryRoles()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetSessionIdleTimeoutMins` <a name="resetSessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionIdleTimeoutMins"></a>

```java
public void resetSessionIdleTimeoutMins()
```

##### `resetSessionUiIdleTimeoutMins` <a name="resetSessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionUiIdleTimeoutMins"></a>

```java
public void resetSessionUiIdleTimeoutMins()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SessionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicy;

SessionPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicy;

SessionPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicy;

SessionPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicy;

SessionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SessionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SessionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SessionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SessionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SessionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRoles">allowedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference">SessionPolicyAllowedSecondaryRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRoles">blockedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference">SessionPolicyBlockedSecondaryRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList">SessionPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList">SessionPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference">SessionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRolesInput">allowedSecondaryRolesInput</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRolesInput">blockedSecondaryRolesInput</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMinsInput">sessionIdleTimeoutMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMinsInput">sessionUiIdleTimeoutMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMins">sessionIdleTimeoutMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMins">sessionUiIdleTimeoutMins</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedSecondaryRoles`<sup>Required</sup> <a name="allowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRoles"></a>

```java
public SessionPolicyAllowedSecondaryRolesOutputReference getAllowedSecondaryRoles();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference">SessionPolicyAllowedSecondaryRolesOutputReference</a>

---

##### `blockedSecondaryRoles`<sup>Required</sup> <a name="blockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRoles"></a>

```java
public SessionPolicyBlockedSecondaryRolesOutputReference getBlockedSecondaryRoles();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference">SessionPolicyBlockedSecondaryRolesOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.describeOutput"></a>

```java
public SessionPolicyDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList">SessionPolicyDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.showOutput"></a>

```java
public SessionPolicyShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList">SessionPolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeouts"></a>

```java
public SessionPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference">SessionPolicyTimeoutsOutputReference</a>

---

##### `allowedSecondaryRolesInput`<sup>Optional</sup> <a name="allowedSecondaryRolesInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRolesInput"></a>

```java
public SessionPolicyAllowedSecondaryRoles getAllowedSecondaryRolesInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

---

##### `blockedSecondaryRolesInput`<sup>Optional</sup> <a name="blockedSecondaryRolesInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRolesInput"></a>

```java
public SessionPolicyBlockedSecondaryRoles getBlockedSecondaryRolesInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `sessionIdleTimeoutMinsInput`<sup>Optional</sup> <a name="sessionIdleTimeoutMinsInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMinsInput"></a>

```java
public java.lang.Number getSessionIdleTimeoutMinsInput();
```

- *Type:* java.lang.Number

---

##### `sessionUiIdleTimeoutMinsInput`<sup>Optional</sup> <a name="sessionUiIdleTimeoutMinsInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMinsInput"></a>

```java
public java.lang.Number getSessionUiIdleTimeoutMinsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeoutsInput"></a>

```java
public IResolvable|SessionPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `sessionIdleTimeoutMins`<sup>Required</sup> <a name="sessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMins"></a>

```java
public java.lang.Number getSessionIdleTimeoutMins();
```

- *Type:* java.lang.Number

---

##### `sessionUiIdleTimeoutMins`<sup>Required</sup> <a name="sessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMins"></a>

```java
public java.lang.Number getSessionUiIdleTimeoutMins();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SessionPolicyAllowedSecondaryRoles <a name="SessionPolicyAllowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyAllowedSecondaryRoles;

SessionPolicyAllowedSecondaryRoles.builder()
//  .all(java.lang.Boolean|IResolvable)
//  .none(java.lang.Boolean|IResolvable)
//  .roles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, allows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.none">none</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, disallows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies roles to be allowed as secondary roles. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, allows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#all SessionPolicy#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.none"></a>

```java
public java.lang.Boolean|IResolvable getNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, disallows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#none SessionPolicy#none}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Specifies roles to be allowed as secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#roles SessionPolicy#roles}

---

### SessionPolicyBlockedSecondaryRoles <a name="SessionPolicyBlockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyBlockedSecondaryRoles;

SessionPolicyBlockedSecondaryRoles.builder()
//  .all(java.lang.Boolean|IResolvable)
//  .none(java.lang.Boolean|IResolvable)
//  .roles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, disallows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.none">none</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, allows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies roles to be blocked as secondary roles. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, disallows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#all SessionPolicy#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.none"></a>

```java
public java.lang.Boolean|IResolvable getNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, allows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#none SessionPolicy#none}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Specifies roles to be blocked as secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#roles SessionPolicy#roles}

---

### SessionPolicyConfig <a name="SessionPolicyConfig" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyConfig;

SessionPolicyConfig.builder()
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
//  .allowedSecondaryRoles(SessionPolicyAllowedSecondaryRoles)
//  .blockedSecondaryRoles(SessionPolicyBlockedSecondaryRoles)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .sessionIdleTimeoutMins(java.lang.Number)
//  .sessionUiIdleTimeoutMins(java.lang.Number)
//  .timeouts(SessionPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.allowedSecondaryRoles">allowedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | allowed_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.blockedSecondaryRoles">blockedSecondaryRoles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | blocked_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionIdleTimeoutMins">sessionIdleTimeoutMins</a></code> | <code>java.lang.Number</code> | For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionUiIdleTimeoutMins">sessionUiIdleTimeoutMins</a></code> | <code>java.lang.Number</code> | For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#database SessionPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#name SessionPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#schema SessionPolicy#schema}

---

##### `allowedSecondaryRoles`<sup>Optional</sup> <a name="allowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.allowedSecondaryRoles"></a>

```java
public SessionPolicyAllowedSecondaryRoles getAllowedSecondaryRoles();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

allowed_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#allowed_secondary_roles SessionPolicy#allowed_secondary_roles}

---

##### `blockedSecondaryRoles`<sup>Optional</sup> <a name="blockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.blockedSecondaryRoles"></a>

```java
public SessionPolicyBlockedSecondaryRoles getBlockedSecondaryRoles();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

blocked_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#blocked_secondary_roles SessionPolicy#blocked_secondary_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#comment SessionPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sessionIdleTimeoutMins`<sup>Optional</sup> <a name="sessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionIdleTimeoutMins"></a>

```java
public java.lang.Number getSessionIdleTimeoutMins();
```

- *Type:* java.lang.Number

For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_idle_timeout_mins SessionPolicy#session_idle_timeout_mins}

---

##### `sessionUiIdleTimeoutMins`<sup>Optional</sup> <a name="sessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionUiIdleTimeoutMins"></a>

```java
public java.lang.Number getSessionUiIdleTimeoutMins();
```

- *Type:* java.lang.Number

For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_ui_idle_timeout_mins SessionPolicy#session_ui_idle_timeout_mins}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.timeouts"></a>

```java
public SessionPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#timeouts SessionPolicy#timeouts}

---

### SessionPolicyDescribeOutput <a name="SessionPolicyDescribeOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyDescribeOutput;

SessionPolicyDescribeOutput.builder()
    .build();
```


### SessionPolicyShowOutput <a name="SessionPolicyShowOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyShowOutput;

SessionPolicyShowOutput.builder()
    .build();
```


### SessionPolicyTimeouts <a name="SessionPolicyTimeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyTimeouts;

SessionPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#create SessionPolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#delete SessionPolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#read SessionPolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#update SessionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#create SessionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#delete SessionPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#read SessionPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#update SessionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SessionPolicyAllowedSecondaryRolesOutputReference <a name="SessionPolicyAllowedSecondaryRolesOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyAllowedSecondaryRolesOutputReference;

new SessionPolicyAllowedSecondaryRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetNone">resetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetNone"></a>

```java
public void resetNone()
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetRoles"></a>

```java
public void resetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.noneInput">noneInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.none">none</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.allInput"></a>

```java
public java.lang.Boolean|IResolvable getAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.noneInput"></a>

```java
public java.lang.Boolean|IResolvable getNoneInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.none"></a>

```java
public java.lang.Boolean|IResolvable getNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.internalValue"></a>

```java
public SessionPolicyAllowedSecondaryRoles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

---


### SessionPolicyBlockedSecondaryRolesOutputReference <a name="SessionPolicyBlockedSecondaryRolesOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyBlockedSecondaryRolesOutputReference;

new SessionPolicyBlockedSecondaryRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetNone">resetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetNone"></a>

```java
public void resetNone()
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetRoles"></a>

```java
public void resetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.noneInput">noneInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.none">none</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.allInput"></a>

```java
public java.lang.Boolean|IResolvable getAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.noneInput"></a>

```java
public java.lang.Boolean|IResolvable getNoneInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.none"></a>

```java
public java.lang.Boolean|IResolvable getNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.internalValue"></a>

```java
public SessionPolicyBlockedSecondaryRoles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

---


### SessionPolicyDescribeOutputList <a name="SessionPolicyDescribeOutputList" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyDescribeOutputList;

new SessionPolicyDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get"></a>

```java
public SessionPolicyDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SessionPolicyDescribeOutputOutputReference <a name="SessionPolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyDescribeOutputOutputReference;

new SessionPolicyDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.allowedSecondaryRoles">allowedSecondaryRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.blockedSecondaryRoles">blockedSecondaryRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionIdleTimeoutMins">sessionIdleTimeoutMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionUiIdleTimeoutMins">sessionUiIdleTimeoutMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput">SessionPolicyDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedSecondaryRoles`<sup>Required</sup> <a name="allowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.allowedSecondaryRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedSecondaryRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blockedSecondaryRoles`<sup>Required</sup> <a name="blockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.blockedSecondaryRoles"></a>

```java
public java.util.List<java.lang.String> getBlockedSecondaryRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `sessionIdleTimeoutMins`<sup>Required</sup> <a name="sessionIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionIdleTimeoutMins"></a>

```java
public java.lang.Number getSessionIdleTimeoutMins();
```

- *Type:* java.lang.Number

---

##### `sessionUiIdleTimeoutMins`<sup>Required</sup> <a name="sessionUiIdleTimeoutMins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionUiIdleTimeoutMins"></a>

```java
public java.lang.Number getSessionUiIdleTimeoutMins();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.internalValue"></a>

```java
public SessionPolicyDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput">SessionPolicyDescribeOutput</a>

---


### SessionPolicyShowOutputList <a name="SessionPolicyShowOutputList" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyShowOutputList;

new SessionPolicyShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get"></a>

```java
public SessionPolicyShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SessionPolicyShowOutputOutputReference <a name="SessionPolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyShowOutputOutputReference;

new SessionPolicyShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput">SessionPolicyShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.internalValue"></a>

```java
public SessionPolicyShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput">SessionPolicyShowOutput</a>

---


### SessionPolicyTimeoutsOutputReference <a name="SessionPolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.session_policy.SessionPolicyTimeoutsOutputReference;

new SessionPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SessionPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

---



